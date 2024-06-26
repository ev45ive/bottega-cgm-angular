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
  selected: Playlist | undefined = mockPlaylists[1];
  selectedId = '234';

  selectPlaylistById(id: string) {
    // this.editorRef?.hasUnsavedChanges; // ???
    this.selectedId = id;
    this.selected = this.playlists.find((p) => p.id == id);
  }

  showDetails() {
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
