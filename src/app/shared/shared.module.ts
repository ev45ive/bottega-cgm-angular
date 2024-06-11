import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './components/clock/clock.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CensorDirective } from './directives/censor.directive';
import { ContenteditableDirective } from './directives/contenteditable.directive';

const MaterialImports = [
  MatButtonModule,
  MatListModule,
  MatFormField,
  MatInputModule,
  MatCardModule
]

@NgModule({
  declarations: [
    ClockComponent,
    CensorDirective,
    ContenteditableDirective
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
    MaterialImports,
    CensorDirective,
    ContenteditableDirective
  ]
})
export class SharedModule { }
