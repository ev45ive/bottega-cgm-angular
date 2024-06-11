import { Component, ViewChild } from '@angular/core';
import { PlaylistEditorComponent } from '../../components/playlist-editor/playlist-editor.component';
import { mockPlaylists } from '../../components/playlist-list/mockPlaylists';
import { Playlist } from '../../components/playlist-list/Playlist';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrl: './playlists-view.component.scss',
})
export class PlaylistsViewComponent {
  mode: 'details' | 'editor' = 'details';

  playlists = mockPlaylists;
  selected = mockPlaylists[1];
  selectedId = '234';

  selectPlaylistById(id: string) {
    this.selectedId = id;

    // const selected = this.playlists.find((p) => p.id == id) as any;
    // const result = selected.get.me.a.million.dollars.and.a.cheesburger().now(42);

    // const selected = this.playlists.find((p) => p.id == id) as Playlist
    // const selected = this.playlists.find((p) => p.id == id) !
    // const selected = {} as Playlist

    const selected = this.playlists.find((p) => p.id == id);

    // Type Narrowing
    if (selected) {
      this.selected = selected; // Playlist
    } else if (!selected) {
      selected; // undefined
    } else {
      selected satisfies never; // never - exhaustiveness check
      throw new Error('Unsuported');
    }
  }

  showDetails() {
    this.editorRef?.hasUnsavedChanges;
    this.mode = 'details';
  }

  showEditor() {
    this.mode = 'editor';
  }

  savePlaylist(draft: Playlist) {
    console.log('saving', draft);
  }

  @ViewChild(PlaylistEditorComponent)
  editorRef?: PlaylistEditorComponent;
}
