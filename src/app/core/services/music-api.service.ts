import { Injectable, inject } from '@angular/core';
import { API_URL } from '../../tokens';
import { HttpClient } from '@angular/common/http';
import { AlbumSearchResponse } from './model/album';
import { AuthService } from './auth.service';

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
    return this.http.get<AlbumSearchResponse>(this.api_url + 'search', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: {
        type: 'album',
        q: query,
      },
    }).pipe(
      // step 2
      // step 3
      // step 4
    )

  }
}
