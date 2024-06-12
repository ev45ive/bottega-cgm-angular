import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'music/search',
    pathMatch: 'full',
  },
  // Login callback:
  {
    path: 'callback',
    redirectTo: 'music/search',
    pathMatch: 'full',
  },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./playlists/playlists.module').then((m) => m.PlaylistsModule),
  },
  {
    path: 'music',
    loadChildren: () => import('./music/music-routing.module'),
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(AppRoutes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
