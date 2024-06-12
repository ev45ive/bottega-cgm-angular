import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MaterialImports, SharedModule } from '../../../shared/shared.module';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

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
      console.log('Subscribe');

      setTimeout(() => {
        subscriber.next(result);
        // subscriber.error
        // subscriber.complete
      }, 2000);
    });

    obs
      .pipe((previous) => {
        return new Observable((nextOperator) => {
          previous.subscribe({
            next: (value) => nextOperator.next(value),
          });
        });
      })
      .subscribe({
        next: (r) => console.log(r),
        error: (r) => console.log(r),
        complete: () => console.log('complete'),
      });

    return obs;
  };

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [MaterialImports, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  query = '';
  @Output() search = new EventEmitter<string>();

  isAdvanced = false;
  bob = inject(FormBuilder);

  searchForm = this.bob.group({
    query: [
      'batman',
      [Validators.required, Validators.minLength(3), censor('batman')],
      [],
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

  markets = this.searchForm.get(['advanced', 'markets']) as FormArray<
    FormGroup<{
      code: FormControl<string | null>;
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
