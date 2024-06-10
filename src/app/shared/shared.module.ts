import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './components/clock/clock.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

const MaterialImports = [
  MatButtonModule,
  MatListModule
]

@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialImports 
  ],
  exports:[
    ClockComponent,
    CommonModule,
    FormsModule,
    MaterialImports
  ]
})
export class SharedModule { }
