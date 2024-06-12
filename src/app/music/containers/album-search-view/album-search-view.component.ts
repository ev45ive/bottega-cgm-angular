import { Component } from '@angular/core';
import { SearchFormComponent } from "../../components/search-form/search-form.component";
import { ResultsGridComponent } from "../../components/results-grid/results-grid.component";
import { mockAlbums } from '../../../core/fixtures/mockAlbums';
import { MusicApiService } from '../../../core/services/music-api.service';
import { Album } from '../../../core/services/model/album';

@Component({
    selector: 'app-album-search-view',
    standalone: true,
    templateUrl: './album-search-view.component.html',
    styleUrl: './album-search-view.component.scss',
    imports: [SearchFormComponent, ResultsGridComponent]
})
export class AlbumSearchViewComponent {
    results:Album[] = []
    message = ''

    constructor(private api: MusicApiService){}
    
    searchAlbums(query: string) {
       this.api
        .fetchAlbums(query) 
        .subscribe({
            next: (response) => this.results = response.albums.items,   // --O--O--O--O--O->
            error: (error) => this.message = error.error.error.message, // --------X>
            // complete: () => console.log('complete'),                 // ----O------O---|>
        })
    }
}
