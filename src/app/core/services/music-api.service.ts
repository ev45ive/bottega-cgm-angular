import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumResponse, AlbumSearchResponse } from './model/album';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  http = inject(HttpClient);
  auth = inject(AuthService);

  fetchAlbums(query: string) {
    return this.http
      .get<AlbumSearchResponse>('search', {
        headers: {},
        params: {
          type: 'album',
          q: query,
        },
      })
      .pipe(map((res) => res.albums.items));
  }

  fetchAlbumById(id: string) {
    return this.http.get<AlbumResponse>('albums/' + id);
  }
}
