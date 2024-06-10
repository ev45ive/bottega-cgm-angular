import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [ AppComponent /* HeaderComponent, SidebarComponent */]
})
export class AppModule { }

// export class AppModule implements DoBootstrap{
//   ngDoBootstrap(appRef: ApplicationRef): void {
//     appRef.bootstrap(AppComponent,'app-root')
//   }
// }
