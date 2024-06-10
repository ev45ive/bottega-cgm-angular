import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './components/clock/clock.component';



@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ClockComponent
  ]
})
export class SharedModule { }
