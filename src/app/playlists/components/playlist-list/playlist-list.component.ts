import { Component } from '@angular/core';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.scss',
})
export class PlaylistListComponent {
  playlists: Playlist[] = [];
  selectedId = '';

  select(id: string) {
    this.selectedId = id;
  }

  byId(index: number, p: { id: string }) {
    return p.id;
  }
}
