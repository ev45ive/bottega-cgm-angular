import { Component, DestroyRef, inject } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { ResultsGridComponent } from '../../components/results-grid/results-grid.component';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album } from '../../../core/services/model/album';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-album-search-view',
  standalone: true,
  templateUrl: './album-search-view.component.html',
  styleUrl: './album-search-view.component.scss',
  imports: [AsyncPipe, SearchFormComponent, ResultsGridComponent],
})
export class AlbumSearchViewComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);

  queryChanges = this.route.queryParamMap.pipe(
    map((p) => p.get('q') || ''),
    filter(Boolean),
  );

  resultsChanges = this.queryChanges.pipe(
    switchMap((query) => this.api.fetchAlbums(query)),
  );

  constructor(private api: MusicApiService) {}

  searchAlbums(query: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query },
    });
  }
}
