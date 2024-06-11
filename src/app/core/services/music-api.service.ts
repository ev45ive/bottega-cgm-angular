import { Inject, Injectable, inject } from '@angular/core';
import { mockAlbums } from '../fixtures/mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../tokens';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {

  api_url = inject(API_URL)
  http = inject(HttpClient)

  fetchAlbum(query:string){
    
    // Unicast Observable // 1-1 // Recipe
    const obs = this.http.get(this.api_url + 'search',{
      headers:{
        Authorization:'Bearer lubieplacki'
      },
      params:{
        type: 'album',
        q: query
      },
    })

    // Cooking Recipe
    const sub: Subscription = obs.subscribe(console.log)
    sub.unsubscribe()

    obs.subscribe({
      next: (value) => console.log('next',value),
      error: (err) => console.log('error',err),
      complete: () => console.log('complete'),
    })
    
    return mockAlbums
  }
}
