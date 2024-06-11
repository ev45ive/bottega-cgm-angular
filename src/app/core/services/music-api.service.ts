import { Inject, Injectable, inject } from '@angular/core';
import { mockAlbums } from '../fixtures/mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../tokens';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {

  api_url = inject(API_URL)

  // constructor( @Inject(API_URL) private api_url: string  ) { }

  fetchAlbum(query:string){
    console.log('Searching ... ',
    this.api_url,
    query);
    
    return mockAlbums
  }
}
