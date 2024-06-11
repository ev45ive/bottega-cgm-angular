import { Injectable } from '@angular/core';
import { mockAlbums } from '../fixtures/mockAlbums';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {

  constructor() { }

  fetchAlbum(){
    return mockAlbums
  }
}
