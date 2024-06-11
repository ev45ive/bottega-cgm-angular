import { Directive } from '@angular/core';

@Directive({
  selector: '[contenteditable][ngModel]'
})
export class ContenteditableDirective {

  constructor() { }

}
