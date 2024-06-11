import { Directive } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[contenteditable][ngModel]',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: ContenteditableDirective, multi:true },
  ],
})
export class ContenteditableDirective implements ControlValueAccessor {
  constructor() {}

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
