import { Component, inject } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { ResultsGridComponent } from '../../components/results-grid/results-grid.component';
import { mockAlbums } from '../../../core/fixtures/mockAlbums';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album } from '../../../core/services/model/album';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, filter, map, switchMap } from 'rxjs';

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
  sub1?: Subscription;
  sub2?: Subscription;

  constructor(private api: MusicApiService) {}

  resultsChanges = this.queryChanges.pipe(
    switchMap((query) => this.api.fetchAlbums(query)), // only newest // debounce
  );

  ngOnInit(): void {
    this.sub1 = this.queryChanges.subscribe((q) => (this.query = q));
    this.sub2 = this.resultsChanges.subscribe(
      (results) => (this.results = results),
    );
  }

  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
  }

  searchAlbums(query: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query },
    });
  }
}
