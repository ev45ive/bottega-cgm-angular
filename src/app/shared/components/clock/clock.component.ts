import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: ` <p>clock: {{ time }}</p> `,
  styles: ``,
})
export class ClockComponent {
  time = new Date().toLocaleTimeString();

  constructor() {}

  ngOnInit(): void {
    
    this.time = new Date().toLocaleTimeString();
  }
}
