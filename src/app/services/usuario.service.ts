import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { Usuarios } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:4000/api/usuarios/'
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarUsuarios(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  guardarUsuario(usuario: Usuarios):Observable<any>{
    return this.http.post(this.url,usuario);
  }

  obtenerUsuario(id: string):Observable<any>{
    return this.http.get(this.url + id);
  }

  editarUsuario(id:string,usuario: Usuarios):Observable<any>{
      return this.http.put(this.url + id,usuario);
  }

}
