import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistEditorComponent } from './playlist-editor.component';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { mockPlaylists } from '../playlist-list/mockPlaylists';

fdescribe('PlaylistEditorComponent', () => {
  let component: PlaylistEditorComponent;
  let fixture: ComponentFixture<PlaylistEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistEditorComponent],
      imports: [SharedModule],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistEditorComponent);
    // fixture.changeDetectorRef
    // fixture.componentInstance
    // fixture.debugElement
    // fixture.nativeElement
    // fixture.ngZone
    component = fixture.componentInstance;

    // component.cancel.subscribe(spy)
    // expect(spy).toHaveBeenCalled()

    component.playlist = mockPlaylists[0]
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update model', () => {
    const playlist_name = fixture.debugElement.query(By.css('#playlist_name'));
    playlist_name.nativeElement.value = 'placki';
    playlist_name.nativeElement.dispatchEvent(new InputEvent('input'));
    fixture.detectChanges();
    expect(component.playlist.name).toEqual('placki');
  });

  it('validate', () => {
    const playlist_name = fixture.debugElement.query(By.css('#playlist_name'));
    playlist_name.nativeElement.value = 'batman';
    playlist_name.nativeElement.dispatchEvent(new InputEvent('input'));
    playlist_name.nativeElement.dispatchEvent(new InputEvent('blur'));
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toMatch('Cannot contain batman');
  });
});
