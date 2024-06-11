import { Component } from '@angular/core';
import { MaterialImports } from '../../../shared/shared.module';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [MaterialImports],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss'
})
export class AlbumCardComponent {

}
