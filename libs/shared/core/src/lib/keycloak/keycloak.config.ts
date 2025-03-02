import { KeycloakOptions } from 'keycloak-angular';


export const keycloakConfig: KeycloakOptions = {
  config: {
    url: 'http://localhost:8080/auth',
    realm: 'nam',
    clientId: 'angular-auth'
  },
  initOptions: {
    onLoad: 'login-required',
    checkLoginIframe: false
  }
};


