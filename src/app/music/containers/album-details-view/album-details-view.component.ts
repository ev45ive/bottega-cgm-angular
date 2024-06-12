import {
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';
import { AlbumResponse, Track } from '../../../core/services/model/album';
import { MaterialImports } from '../../../shared/shared.module';
import { MusicApiService } from '../../../core/services/music-api.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, single, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-details-view',
  standalone: true,
  templateUrl: './album-details-view.component.html',
  styleUrl: './album-details-view.component.scss',
  imports: [MaterialImports, AlbumCardComponent],
})
export class AlbumDetailsViewComponent {
  api = inject(MusicApiService);

  injector = inject(Injector);
  // albumId = input<string>();

  route = inject(ActivatedRoute);

  albumId = signal('');

  album = signal<AlbumResponse | undefined>(undefined);

  currentTrack = signal<Track | undefined>(undefined);

  play(track: Track) {
    this.currentTrack.set(track);

    afterNextRender(() => this.audioRef()?.nativeElement.play(), {
      injector: this.injector,
    });
  }

  audioRef = viewChild<ElementRef<HTMLAudioElement>>('audioRef');

  // albumSignal = toSignal(this.api.fetchAlbumById(this.albumId()!));

  tracks = computed(() => {
    return this.album()?.tracks.items;
  });

  albumIdObservable = toObservable(this.albumId);

  effect = effect(() => {
    this.albumIdObservable
      .pipe(switchMap((id) => this.api.fetchAlbumById(id!)))
      .pipe(/* .... */)
      .subscribe((album) => this.album.set(album));
  });

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map((qp) => qp.get('albumId')))
      .subscribe((id) => this.albumId.set(id!));
  }
}
