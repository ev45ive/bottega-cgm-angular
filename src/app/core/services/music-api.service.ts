import { Injectable } from '@angular/core';
import { mockAlbums } from '../fixtures/mockAlbums';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {

  api_url = environment.api_url

  constructor() { }

  fetchAlbum(query:string){
    console.log('Searching ... ',query);
    
    return mockAlbums
  }
}
