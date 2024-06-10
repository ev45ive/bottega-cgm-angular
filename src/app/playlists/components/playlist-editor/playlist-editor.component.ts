import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrl: './playlist-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // d|-_-|b
})
export class PlaylistEditorComponent {
  // @Input() playlist: Class;

  ngDoCheck(): void { // parent is being checked
    this.cdr.markForCheck() // detect once with parent
  }

  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detectChanges(); // Cannot detect in constructor
  }

  playlist = {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Best playlsit',
  };
}
