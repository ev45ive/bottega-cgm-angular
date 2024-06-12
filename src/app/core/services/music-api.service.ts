import { Injectable, inject } from '@angular/core';
import { API_URL } from '../../tokens';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlbumResponse, AlbumSearchResponse } from './model/album';
import { AuthService } from './auth.service';
import { mockAlbums } from '../fixtures/mockAlbums';
import {
  EMPTY,
  NEVER,
  catchError,
  from,
  map,
  of,
  pipe,
  retry,
  throwError,
  timer,
} from 'rxjs';

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
        errorHandling(),
      );
  }
}

const errorHandling = <T>() => pipe(
  retry<T>({
    count: 3,
    delay(error, retryCount) {
      if (
        !(error instanceof HttpErrorResponse || [500, 0].includes(error.status))
      )
        throw error;

      return timer(retryCount * 500 ** 2); // Exponential backoff
    },
  }),
  catchError((error: unknown) => {
    if (!(error instanceof HttpErrorResponse))
      throw new Error('Unexpected error');

    throw new Error(error.error.error.message);
  }),
);
