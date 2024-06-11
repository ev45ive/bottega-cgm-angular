import { Inject, Injectable, inject } from '@angular/core';
import { mockAlbums } from '../fixtures/mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../tokens';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {

  api_url = inject(API_URL)
  http = inject(HttpClient)

  fetchAlbum(query:string){
    
    this.http.get(this.api_url + 'search',{
      headers:{
        Authorization:'Bearer lubieplacki'
      },
      params:{
        type:'album',q:query
      },
      // reportProgress: true,
      // transferCache:{}
       // <script id="ng-state" type="application/json">{"__nghData__":[{}
    })
    
    return mockAlbums
  }
}
