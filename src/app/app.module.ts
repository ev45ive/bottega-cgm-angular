import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { API_URL } from './tokens';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { FormBuilder } from '@angular/forms';
import {
  ErrorInterceptor,
  URLInterceptor,
  authInterceptor,
} from './core/interceptors/auth.interceptor';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [MainLayoutComponent, BrowserModule, SharedModule],
  providers: [
    provideRouter(AppRoutes, withComponentInputBinding()),
    provideHttpClient(
      withFetch(),
      withInterceptors([URLInterceptor, authInterceptor, ErrorInterceptor]),
      withInterceptorsFromDi(), // classes!
    ),
    provideOAuthClient(),
    provideClientHydration(),
    provideAnimationsAsync(),
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi:true,
    //   useClass: NameInterceptorClass
    // },
    // {
    //   provide: HttpClient,
    //   useClass: SuperHiperHttpCLient
    // },
    // Override
    // {
    //   provide:  API_URL,
    //   useValue: 'http://localhost/test-api'
    // },
    // {
    //   provide: FormBuilder,
    //   useClass: SuperFormBuilder
    // }
  ],
  bootstrap: [AppComponent /* HeaderComponent, SidebarComponent */],
})
export class AppModule {}

// export class AppModule implements DoBootstrap{
//   ngDoBootstrap(appRef: ApplicationRef): void {
//     appRef.bootstrap(AppComponent,'app-root')
//   }
// }
