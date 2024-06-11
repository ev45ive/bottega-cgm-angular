import { Directive, ElementRef } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  NgModel,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appCensor]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CensorDirective, multi: true },
  ],
})
export class CensorDirective implements Validator {
  badword = 'batman';

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return String(control.value).includes(this.badword)
      ? { censor: { badword: this.badword } }
      : null;
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}
