import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './components/clock/clock.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CensorDirective } from './directives/censor.directive';
import { ContenteditableDirective } from './directives/contenteditable.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export const MaterialImports = [
  CommonModule,
  FormsModule,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  MatSelectModule,
  MatButtonModule,
  MatListModule,
  MatFormField,
  MatInputModule,
  MatCardModule,
  MatIconModule,

  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
];

@NgModule({
  declarations: [ClockComponent, CensorDirective, ContenteditableDirective],
  imports: [MaterialImports],
  exports: [
    ClockComponent,
    MaterialImports,
    CensorDirective,
    ContenteditableDirective,
  ],
})
export class SharedModule {}
