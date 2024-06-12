import { Component, Input } from '@angular/core';
import { MaterialImports } from '../../../shared/shared.module';
import { Album } from '../../../core/services/model/album';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [MaterialImports],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss'
})
export class AlbumCardComponent {
  @Input({required:true}) album!: Album;
}
