import { Component, PLATFORM_ID, inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root, .placki[sos=malinowy]',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cgm';

  // oauth = inject(OAuthService)
  oauth = inject(AuthService)
  pid =inject(PLATFORM_ID)

  constructor(){
    // this.oauth.configure(environment.authConfig)
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.pid))
    this.oauth.tryLogin()
  }

  login(){
    this.oauth.initLoginFlow()
  }
}
