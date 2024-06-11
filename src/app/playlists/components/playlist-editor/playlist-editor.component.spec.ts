import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistEditorComponent } from './playlist-editor.component';
import { By } from '@angular/platform-browser';

fdescribe('PlaylistEditorComponent', () => {
  let component: PlaylistEditorComponent;
  let fixture: ComponentFixture<PlaylistEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistEditorComponent);
    // fixture.changeDetectorRef
    // fixture.componentInstance
    // fixture.debugElement
    // fixture.nativeElement
    // fixture.ngZone
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should update model', () => {
    const playlist_name = fixture.debugElement.query(By.css('#playlist_name'));
    playlist_name.nativeElement.value = 'placki';
    playlist_name.nativeElement.dispatchEvent(new InputEvent('input'));
    fixture.detectChanges();
    expect(component.playlist.name).toEqual('placki 123')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
