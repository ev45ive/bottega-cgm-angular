import { Component } from '@angular/core';
import { AlbumCardComponent } from "../album-card/album-card.component";

@Component({
    selector: 'app-results-grid',
    standalone: true,
    templateUrl: './results-grid.component.html',
    styleUrl: './results-grid.component.scss',
    imports: [AlbumCardComponent]
})
export class ResultsGridComponent {

}
