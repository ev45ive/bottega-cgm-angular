import { Component, DestroyRef, inject } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { ResultsGridComponent } from '../../components/results-grid/results-grid.component';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album } from '../../../core/services/model/album';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// function takeUntilDestroyed<T>() {
//   const destroyEmitter = new Subject();
//   inject(DestroyRef).onDestroy(() => {
//     destroyEmitter.next(1);
//   });
//   return takeUntil<T>(destroyEmitter);
// }

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
    takeUntilDestroyed(),
  );

  resultsChanges = this.queryChanges.pipe(
    switchMap((query) => this.api.fetchAlbums(query)),
    takeUntilDestroyed(),
  );

  constructor(private api: MusicApiService) {}

  ngOnInit(): void {
    this.queryChanges.subscribe((q) => (this.query = q));
    this.resultsChanges.subscribe((results) => (this.results = results));

    // Error: NG0203: inject() must be called from an injection context such as a constructor, a factory function,
    // a field initializer, or a function used with `runInInjectionContext`.
    // Find more at https://angular.dev/errors/NG0203
    inject(DestroyRef);
  }

  searchAlbums(query: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: query },
    });
  }
}
