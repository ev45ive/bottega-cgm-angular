import { Inject, Injectable, inject } from '@angular/core';
import { mockAlbums } from '../fixtures/mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../tokens';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AlbumResponse, AlbumSearchResponse } from './model/album';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {

  api_url = inject(API_URL)
  http = inject(HttpClient)

  fetchAlbum(query:string){
    
    const token = 'BQC_Iausg8i6cczkBh6l0YIxvx65drKHc0e1NeBBz0OG4y0Bhs4P3pfVKVcGdZ1bszWl1lHchDmrptX8XXpFZJMtVr4zm_MAIKElaiwiwlOV6g-WL9msg75QRfPCfxTeXZFnerKcDF87Gbk_6lRjYmXEjChnkrGWBoQWs6tv3MMRx87TqBHxky6yokC6TfXoqmZAVp7tE0wD8pW5fTLAPC00hfrpQ6dUjWebBK7Q_W_zOkAuG8H3n6YMnnnQimXp58T2ZwIHXp9NuJqZ0QvUu68G';

    // Unicast Observable // 1-1 // Recipe
    const obs = this.http.get<AlbumSearchResponse>(this.api_url + 'search',{
      headers:{
        Authorization:'Bearer '+token
      },
      params:{
        type: 'album',
        q: query
      },
    })
    
    return obs
  }
}
