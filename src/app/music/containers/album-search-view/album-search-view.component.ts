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

    constructor(private api:MusicApiService){}

    results:Album[] = []

    searchAlbums(query: string) {
        this.results= this.api.fetchAlbum(query)    
    }

}
