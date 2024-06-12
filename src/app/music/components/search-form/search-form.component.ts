import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialImports, SharedModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [MaterialImports, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  query = '';
  @Output() search = new EventEmitter<string>();

  searchForm = new FormGroup({
    query: new FormControl('batman'),
  });

  submit() {
    this.search.emit(this.searchForm.value.query || '');
  }
}
