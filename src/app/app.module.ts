import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // PlaylistsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [ AppComponent /* HeaderComponent, SidebarComponent */]
})
export class AppModule { }

// export class AppModule implements DoBootstrap{
//   ngDoBootstrap(appRef: ApplicationRef): void {
//     appRef.bootstrap(AppComponent,'app-root')
//   }
// }
