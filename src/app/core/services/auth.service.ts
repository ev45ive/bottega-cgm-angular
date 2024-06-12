import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  oauth = inject(OAuthService);

  token = '';
  constructor() {}

  tryLogin() {
    if (window.location.hash) {
      const access_token = new URLSearchParams(
        window.location.hash.slice(1),
      ).get('access_token');

      if (access_token) {
        sessionStorage.setItem('token', access_token);
        window.location.hash = '';
        this.token = access_token;
      }
    } else {
      const access_token = sessionStorage.getItem('token');
      if (access_token) this.token = access_token;
    }
  }

  initLoginFlow() {
    const { clientId, loginUrl, scope, redirectUri, customQueryParams } =
      environment.authConfig;

    const url =
      loginUrl +
      '?' +
      new URLSearchParams({
        response_type: 'token',
        client_id: clientId!,
        scope: scope!,
        redirect_uri: redirectUri!,
        ...customQueryParams,
      }).toString();

    window.location.href = url;
    // debugger
  }

  getToken() {
    return this.token;
  }
}
