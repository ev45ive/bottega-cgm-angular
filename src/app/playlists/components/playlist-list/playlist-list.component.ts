import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from './Playlist';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.scss',
})
export class PlaylistListComponent {

  // Stateless / Controlled 
  
  @Input('items') playlists: Playlist[] = [];
  @Input() selectedId = '';
  
  @Output() selectedIdChange = new EventEmitter<Playlist['id']>();

  select(id: string) {
    this.selectedIdChange.emit(id)
  }

  byId(index: number, p: { id: string }) {
    return p.id;
  }
}
