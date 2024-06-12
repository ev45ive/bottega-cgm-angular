import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MaterialImports, SharedModule } from '../../../shared/shared.module';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

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

  bob = inject(FormBuilder);

  searchForm = this.bob.group({
    query: ['batman'],
  });

  // searchForm = new FormGroup({
  //   query: new FormControl('batman'),
  // });

  submit() {
    this.search.emit(this.searchForm.value.query || '');
  }
}
