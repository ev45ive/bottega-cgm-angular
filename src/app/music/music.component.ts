import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
  standalone: true, // SCAM,
  imports: [SharedModule, RouterOutlet],
})
export class MusicComponent {}

// // SCAM - Single Component Angular Module
// @NgModule({
//   declarations: [MusicComponent],
//   imports: [CommonModule],
// })
// export class MusicComponentModule {}
