import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS } from './config/app.url.config';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AppService {

  authenticated : boolean = false;

  constructor( private http :  HttpClient, private cookieService : CookieService) { }

  authenticate(credentials: { username: string; password: string; }, callback: { (): void; (): any; }){
    if(credentials){

      const token = btoa(credentials.username+ ':' +credentials.password);

      this.cookieService.set('token',token);

      this.http.get<any>(API_URLS.USER_URL, { withCredentials: true }).subscribe(
        (response)  => {
        if(response && response['name']){
          console.log(response);
          this.authenticated = true;
        } else{
          this.authenticated = false;
        }
      });
      return callback && callback();
    }
    else{
      this.authenticated = false;
    }
  }

  logout(callback: () => any){
    return callback && callback();
  }
}
