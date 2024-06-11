import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { API_URL } from './tokens';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    {
      provide:  API_URL,
      useValue: environment.api_url
    },
    // Override
    // {
    //   provide:  API_URL,
    //   useValue: 'http://localhost/test-api'
    // },
  ],
  bootstrap: [ AppComponent /* HeaderComponent, SidebarComponent */]
})
export class AppModule { }

// export class AppModule implements DoBootstrap{
//   ngDoBootstrap(appRef: ApplicationRef): void {
//     appRef.bootstrap(AppComponent,'app-root')
//   }
// }
