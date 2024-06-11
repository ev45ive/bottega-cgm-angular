import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './music.component';
import { AlbumSearchViewComponent } from './containers/album-search-view/album-search-view.component';
import { AlbumDetailsViewComponent } from './containers/album-details-view/album-details-view.component';

const routes: Routes = [
  {
    path: /* music/ */ '',
    component: MusicComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: AlbumSearchViewComponent,
      },
      {
        // path: 'albunms/r43by6ye5yg',
        path: 'albunms/:albumId',
        component: AlbumDetailsViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicRoutingModule {}
