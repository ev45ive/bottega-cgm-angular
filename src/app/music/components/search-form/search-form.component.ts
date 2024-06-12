import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MaterialImports, SharedModule } from '../../../shared/shared.module';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  withLatestFrom,
} from 'rxjs';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [MaterialImports, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class SearchFormComponent {
  @Output() search = new EventEmitter<string>();

  @Input() set query(q: string | null) {
    this.searchForm.get('query')?.setValue(q || '', {
      emitEvent: false,
    });
  }

  isAdvanced = false;
  // bob = inject(FormBuilder);
  bob = inject(NonNullableFormBuilder);

  searchForm = this.bob.group({
    query: [
      '',
      [Validators.required, Validators.minLength(3)],
      [AsyncCensor('batman')],
    ],
    advanced: this.bob.group({
      type: ['album'],
      markets: this.bob.array([
        this.bob.group({
          code: ['PL'],
        }),
      ]),
    }),
  });

  field = this.searchForm.get('query')!;
  statusChanges = this.field.statusChanges;
  valueChanges = this.field.valueChanges;

  validChanges = this.statusChanges.pipe(
    withLatestFrom(this.valueChanges),
    filter(([status, value]) => status === 'VALID'),
    map(([status, value]) => value),
  );

  searchChanges = this.validChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
  );

  ngOnInit(): void {
    this.searchChanges.subscribe(this.search);
  }

  markets = this.searchForm.get(['advanced', 'markets']) as FormArray<
    FormGroup<{
      code: FormControl<string>;
    }>
  >;

  addMarket() {
    this.markets.push(
      this.bob.group({
        code: [''],
      }),
    );
  }

  searchForm2 = new FormGroup({
    query: new FormControl('batman', [
      Validators.required,
      Validators.minLength(3),
      censor('batman'),
    ]),
    advanced: new FormGroup({
      type: new FormControl('album'),
      markets: this.bob.array([
        new FormGroup({
          code: new FormControl('PL'),
        }),
      ]),
    }),
  });

  submit() {
    this.search.emit(this.searchForm.value.query || '');
  }
}

const censor =
  (badword: string): ValidatorFn =>
  (control: AbstractControl<any, any>): ValidationErrors | null => {
    return String(control.value).includes(badword)
      ? { censor: { badword: badword } }
      : null;
  };

const AsyncCensor =
  (badword: string): AsyncValidatorFn =>
  (control: AbstractControl<any, any>): Observable<ValidationErrors | null> => {
    const result = censor(badword)(control);

    // UniCast Observable 1-1
    const obs = new Observable<ValidationErrors | null>((subscriber) => {
      // console.log('Subscribe');

      const handle = setTimeout(() => {
        subscriber.next(result);
        // console.log('NExt', result);

        subscriber.complete();
      }, 500);

      return () => {
        clearTimeout(handle);
        // console.log('Unsubscribe');
      };
    });
    return obs;
  };
