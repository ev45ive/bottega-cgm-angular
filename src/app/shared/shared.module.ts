import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './components/clock/clock.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MaterialImports = [
  MatButtonModule,
  MatListModule,
  MatFormField,
  MatInputModule,
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
