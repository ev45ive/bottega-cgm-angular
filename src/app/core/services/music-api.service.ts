import { Injectable, inject } from '@angular/core';
import { API_URL } from '../../tokens';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlbumSearchResponse } from './model/album';
import { AuthService } from './auth.service';
import { mockAlbums } from '../fixtures/mockAlbums';
import { EMPTY, NEVER, catchError, from, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  api_url = inject(API_URL);
  http = inject(HttpClient);
  auth = inject(AuthService);

  fetchAlbums(query: string) {
    const token = this.auth.getToken();

    // Unicast Observable // 1-1 // Recipe
    return this.http
      .get<AlbumSearchResponse>(this.api_url + 'search', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
        params: {
          type: 'album',
          q: query,
        },
      })
      .pipe(
        map((res) => res.albums.items),
        catchError((error: unknown, originalObservable) => {

          if (!(error instanceof HttpErrorResponse))
            throw new Error('Unexpected error');

          throw new Error(error.error.error.message);

          // return originalObservable // retry
          // return this.http.get(inny server).pipe( itd ..)
          // return throwError(() => new Error(error.error.error.message))
          // return from([mockAlbums])
          // return of(mockAlbums)
          // return [mockAlbums, mockAlbums] // OO|>
          // return []; // ---|>
          // return EMPTY // --|>
          // return NEVER
        }),
      );
  }
}
