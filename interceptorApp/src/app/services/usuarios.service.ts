import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'cjgmj');

    const headers = new HttpHeaders({
      'token-usuario': 'SCF7WER93SDJCNL1109'
    });

    return this.http.get('https://reqres.in/api/user', {
      params: params,
      headers: headers
    });
  }
}
