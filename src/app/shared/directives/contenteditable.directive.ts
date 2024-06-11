import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
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
  // constructor(private elem: ElementRef<HTMLElement>) {}

  @HostBinding('aria-disabled')
  @HostBinding('class.bg-gray-200')
  isDisabled = false;
  
  @HostBinding('innerHTML')
  value: any;

  @HostListener('input',['$event.target.innerHTML'])
  onChange:any 

  @HostListener('blur',['$event.target.innerHTML'])
  onTouched:any 


  writeValue(obj: any): void {
    this.value = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}

// const dir = new ContenteditableDirective()
