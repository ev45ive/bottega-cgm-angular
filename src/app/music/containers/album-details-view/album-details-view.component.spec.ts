import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailsViewComponent } from './album-details-view.component';

describe('AlbumDetailsViewComponent', () => {
  let component: AlbumDetailsViewComponent;
  let fixture: ComponentFixture<AlbumDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumDetailsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
