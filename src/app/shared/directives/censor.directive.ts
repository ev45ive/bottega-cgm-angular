import { Directive, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appCensor]',
})
export class CensorDirective {
  
  
  constructor(
    private elem:ElementRef,
    private model:NgModel
  ) {
    console.log('appCensor', elem,model);
  }
}
