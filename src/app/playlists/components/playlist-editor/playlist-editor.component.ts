import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Host,
  Input,
  Optional,
  Output,
  ViewChild,
} from '@angular/core';
import { PlaylistsViewComponent } from '../../containers/playlists-view/playlists-view.component';
import { AppComponent } from '../../../app.component';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { NgModel } from '@angular/forms';
import { Playlist } from '../playlist-list/Playlist';

// Command pattern
// class PlaylsitEditCommand{
//   readonly type = 'Playlist Edit'
//   constructor(...){ }
//   execute(context){ }
// }
// this.emitter.emit( new PlaylsitEditEvent(data ))

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
  @Input({ required: true }) playlist!: Playlist;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Playlist>();

  close() {
    this.cancel.emit();
  }
  submit() {
    this.save.emit(this.playlist);
  }

  @ViewChild('inputRef', { read: NgModel, static: false })
  inputRef?: NgModel;

  ngAfterContentInit(): void {
    this.inputRef?.value;
  }

  hasUnsavedChanges = false;
}
