import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  // issuer: 'https://idsvr4.azurewebsites.net',

  loginUrl:'https://accounts.spotify.com/authorize',

  oidc:false,

  // URL of the SPA to redirect the user to after loginemv
  redirectUri: globalThis.location?.origin + '/callback',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  // clientId: process.env.CODE,
  clientId: 'b676b5457a054bdeb5b4b9a7c22c28c1',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',
  // responseType: 'code',

  responseType: 'token',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'user-read-private user-read-email',

  customQueryParams:{
    show_dialog: true
  },

  showDebugInformation: true,
};


export const environment = {
  api_url: 'https://api.spotify.com/v1/',
  authConfig
};
