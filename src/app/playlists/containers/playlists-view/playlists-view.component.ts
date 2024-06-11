import { Component, ViewChild } from '@angular/core';
import { PlaylistEditorComponent } from '../../components/playlist-editor/playlist-editor.component';
import { mockPlaylists } from '../../components/playlist-list/mockPlaylists';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrl: './playlists-view.component.scss',
})
export class PlaylistsViewComponent {
  selectPlaylistById(id: string) {
    this.selectedId = id;
    this.selected = this.playlists.find((p) => p.id == id)!;
  }
  mode: 'details' | 'editor' = 'details';

  playlists = mockPlaylists;
  selectedId = '234';
  selected?: any;

  showDetails() {
    this.editorRef?.hasUnsavedChanges;
    this.mode = 'details';
  }

  showEditor() {
    this.mode = 'editor';
  }

  @ViewChild(PlaylistEditorComponent)
  editorRef?: PlaylistEditorComponent;
}
