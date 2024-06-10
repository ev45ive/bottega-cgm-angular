import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.scss',
})
export class PlaylistDetailsComponent {
  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Best playlsit',
  };
}
