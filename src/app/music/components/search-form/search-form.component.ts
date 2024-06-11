import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialImports, SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [MaterialImports],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {

  query = ''

  @Output() search = new EventEmitter<string>();

  submit(){
    this.search.emit(this.query)
  }
}
