import { Inject, Injectable } from '@angular/core';
import { mockAlbums } from '../fixtures/mockAlbums';
import { environment } from '../../../environments/environment';
import { API_URL } from '../../tokens';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {


  constructor(
    @Inject(API_URL) private api_url:string
  ) { }

  fetchAlbum(query:string){
    console.log('Searching ... ',
    this.api_url,
    query);
    
    return mockAlbums
  }
}
