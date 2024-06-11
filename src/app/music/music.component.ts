import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
})
export class MusicComponent {}

// SCAM - Single Component Angular Module
@NgModule({
  declarations: [MusicComponent],
  imports: [CommonModule],
})
export class MusicComponentModule {}
