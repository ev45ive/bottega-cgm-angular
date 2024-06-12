import { Inject, Injectable, inject } from '@angular/core';
import { mockAlbums } from '../fixtures/mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../tokens';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AlbumResponse, AlbumSearchResponse } from './model/album';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  api_url = inject(API_URL);
  http = inject(HttpClient);
  auth = inject(AuthService);

  fetchAlbum(query: string) {
    const token = this.auth.getToken();

    // Unicast Observable // 1-1 // Recipe
    const obs = this.http.get<AlbumSearchResponse>(this.api_url + 'search', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: {
        type: 'album',
        q: query,
      },
    });

    return obs;
  }
}
