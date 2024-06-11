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
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { PlaylistsViewComponent } from '../../containers/playlists-view/playlists-view.component';
import { AppComponent } from '../../../app.component';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { NgForm, NgModel } from '@angular/forms';
import { Playlist } from '../playlist-list/Playlist';

const EMPTY_PLAYLIST = {
  id: '',
  name: '',
  public: false,
  description: '',
};
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
  @Input() playlist?: Playlist = EMPTY_PLAYLIST;
  draft?: Playlist;

  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Playlist>();

  // constructor() {
  //   console.log('constructor');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges', changes);
  // }
  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }

  close() {
    this.cancel.emit();
  }
  submit() {
    if (this.formRef?.invalid) return;

    const draft = {
      ...this.playlist,
      ...this.formRef?.value,
    };
    
    this.save.emit(draft);
  }

  @ViewChild('formRef', { read: NgForm, static: false })
  formRef?: NgForm;

  @ViewChild('inputRef', { read: NgModel, static: false })
  inputRef?: NgModel;

  ngAfterContentInit(): void {
    this.inputRef?.value;
  }

  hasUnsavedChanges = false;
}
