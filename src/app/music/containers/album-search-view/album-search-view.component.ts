import { Component, inject } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { ResultsGridComponent } from '../../components/results-grid/results-grid.component';
import { mockAlbums } from '../../../core/fixtures/mockAlbums';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album } from '../../../core/services/model/album';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-album-search-view',
  standalone: true,
  templateUrl: './album-search-view.component.html',
  styleUrl: './album-search-view.component.scss',
  imports: [SearchFormComponent, ResultsGridComponent],
})
export class AlbumSearchViewComponent {
  query = '';
  message = '';
  results: Album[] = [];

  router = inject(Router);
  route = inject(ActivatedRoute);

  queryChanges = this.route.queryParamMap.pipe(
    map((p) => p.get('q') || ''),
    filter(Boolean),
  );

  constructor(private api: MusicApiService) {}

  resultsChanges = this.queryChanges.pipe(
    switchMap((query) => this.api.fetchAlbums(query)), // only newest // debounce
  );

  ngOnInit(): void {
    this.queryChanges.subscribe((q) => (this.query = q));
    this.resultsChanges.subscribe((results) => (this.results = results));
  }

  searchAlbums(query: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query },
    });
  }
}
