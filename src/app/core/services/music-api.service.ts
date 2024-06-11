import { Injectable } from '@angular/core';
import { mockAlbums } from '../fixtures/mockAlbums';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {

  constructor() { }

  fetchAlbum(query:string){
    console.log('Searching ... ',query);
    
    return mockAlbums
  }
}
