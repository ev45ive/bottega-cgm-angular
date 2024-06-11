import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Playlist } from '../playlist-list/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class PlaylistDetailsComponent {
  @Input({ required: true }) playlist!: Playlist;

  @Output() edit = new EventEmitter();

  clickEdit(){
    this.edit.emit()
  }

}
