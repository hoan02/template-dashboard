import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from '@mfe/service-common';
import { LocalStorageEnum } from '../../../../data-access/src/lib/enums';


@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private keycloakService: KeycloakService) {
  }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token1 = this.keycloakService.keycloak.token;
    if (!LocalStorageEnum || !LocalStorageEnum.Token) {
      return next.handle(request);
    }
    const token = localStorage.getItem(LocalStorageEnum.Token) || "";

    if (token) {
      const authReq = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }


}
