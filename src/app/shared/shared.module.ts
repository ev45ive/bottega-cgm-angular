import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './components/clock/clock.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    ClockComponent,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
