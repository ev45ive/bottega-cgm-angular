import { Directive, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[contenteditable][ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ContenteditableDirective,
      multi: true,
    },
  ],
})
export class ContenteditableDirective implements ControlValueAccessor {

  // Bridge Pattern - Extend Abstract NgModel with Concrete Control implementation

  isDisabled = false;
  constructor(private elem: ElementRef<HTMLElement>) {}

  writeValue(obj: any): void {
    this.elem.nativeElement.innerHTML = obj;
  }

  registerOnChange(fn: any): void {
    this.elem.nativeElement.oninput = () => fn(this.elem.nativeElement.innerHTML);
  }

  registerOnTouched(fn: any): void {
    this.elem.nativeElement.onblur = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    // this.elem.nativeElement.classList.toggle('bg-gray-200')
  }
}
