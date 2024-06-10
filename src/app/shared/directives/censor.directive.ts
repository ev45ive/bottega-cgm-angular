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

  // Error: NG0200: Circular dependency in DI detected for _NgModel. Find more at https://angular.dev/errors/NG0200
  // constructor(private elem: ElementRef, private model: NgModel) {
  //   console.log('appCensor', elem, model);
  // }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return String(control.value).includes(this.badword)
      ? { censor: { badword: this.badword } }
      : null;
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}
