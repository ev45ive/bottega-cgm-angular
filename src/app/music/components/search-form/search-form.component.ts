import { Component, EventEmitter, Output, inject } from '@angular/core';
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
import { Observable, debounceTime, distinctUntilChanged, filter } from 'rxjs';
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
  query = '';
  @Output() search = new EventEmitter<string>();

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


  ngOnInit(): void {
    // this.searchForm.value  
    // this.searchForm.valueChanges
    
    // TV - Multicast / VOD - Unicast
    // Multicasting observable 1-*
    
    const field = this.searchForm.get('query')!;
    
    const searchChanges = field.valueChanges.pipe(
      // wait for 500ms of silence 
      debounceTime(500),

      // minimum 3 characters
      filter(q => q?.length >= 3),

      // no duplicates,
      distinctUntilChanged(),
    )

    searchChanges.subscribe(console.log)

    
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
      }, 2000);

      return () => {
        clearTimeout(handle);
        // console.log('Unsubscribe');
      };
    });
    return obs;
  };
