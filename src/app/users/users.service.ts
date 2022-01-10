import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs'
/* import { CookieService } from "ngx-cookie-service"; */
import { Usuarios } from '../models/usuario';
/* private cookies: CookieService
 */
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:4000/api/usuarios/'
  constructor(private http: HttpClient) { }
  login(user: any): Observable<any> {
    return this.http.get(this.url);
  }
/*   setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  } */
  /*  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }  */
  getUser(email_personal: string):Observable<any>{
    return this.http.get(email_personal);
  }
/*   getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  } */
/*   closeSession(){
    this.cookies.delete("token");
  } */

}
