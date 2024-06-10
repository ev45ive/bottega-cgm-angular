import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './components/clock/clock.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  exports:[
    ClockComponent,
    CommonModule,
    FormsModule,
    MatButtonModule
  ]
})
export class SharedModule { }
