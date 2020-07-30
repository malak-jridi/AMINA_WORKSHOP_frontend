import { baseUrl } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  register( user ) {
    return this.http.post<any>(`${baseUrl}/register`, user).pipe(tap(res => {
      this.login( user.username, user.password )
  }))
  }

  login(username:string, password:string) {
    return this.http.post<{token:  string}>(`${baseUrl}/api/login_check`, {username, password}).pipe(tap(res => {
      localStorage.setItem('access_token', res.token);
    }))
  }


  logout() {
    localStorage.removeItem('access_token')
  }

  loggedIn() {
    return !!localStorage.getItem('access_token')
  }

  getToken(){
    return localStorage.getItem('access_token')
  }


}
