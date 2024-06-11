import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Host,
  Optional,
  ViewChild,
} from '@angular/core';
import { PlaylistsViewComponent } from '../../containers/playlists-view/playlists-view.component';
import { AppComponent } from '../../../app.component';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrl: './playlist-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // d|-_-|b
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class PlaylistEditorComponent {
  constructor(
    // local scope
    private elem: ElementRef<HTMLDivElement>,

    // High coupling!
    @Host() @Optional() private parent: PlaylistsViewComponent,

    // Singleton
    private app: AppComponent
  ) {}

  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Best playlsit',
  };

  @ViewChild('inputRef', { read: NgModel, static: false })
  inputRef?: NgModel;

  ngAfterContentInit(): void {
    this.inputRef?.value;
  }
  
  hasUnsavedChanges = false;
}
