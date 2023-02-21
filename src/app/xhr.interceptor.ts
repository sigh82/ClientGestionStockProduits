import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';

@Injectable()
export class XhrInterceptor implements HttpInterceptor{

  constructor( private cookieService : CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const token = this.cookieService.get('token');

      const xhr = req.clone({
        headers : req.headers.set('authorization', `Basic ${token}`)
      });
      return next.handle(xhr);
  }

}
