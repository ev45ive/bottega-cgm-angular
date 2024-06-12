import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MaterialImports, SharedModule } from '../../../shared/shared.module';
import {
  FormArray,
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

  isAdvanced = false;
  bob = inject(FormBuilder);

  searchForm = this.bob.group({
    query: ['batman'],
    advanced: this.bob.group({
      type: ['album'],
      markets: this.bob.array([
        this.bob.group({
          code: ['PL'],
        }),
      ]),
    }),
  });

  markets = this.searchForm.get(['advanced', 'markets']) as FormArray<
    FormGroup<{
      code: FormControl<string | null>;
    }>
  >;

  addMarket() {
    this.markets.push(
      this.bob.group({
        code: [''],
      }),
    );
  }

  // searchForm2 = new FormGroup({
  //   query: new FormControl('batman'),
  //   advanced: new FormGroup({
  //     type: new FormControl('album'),
  //     markets: this.bob.array([
  //       new FormGroup({
  //         code: new FormControl('PL'),
  //       }),
  //     ]),
  //   }),
  // });

  submit() {
    this.search.emit(this.searchForm.value.query || '');
  }
}
