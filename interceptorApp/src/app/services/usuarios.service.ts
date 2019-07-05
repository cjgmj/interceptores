import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'cjgmj');

    // 'https://reqres.in/api/user'
    return this.http.get('https://reqres1.in/api/user', {
      params: params
    }).pipe(
      map( resp => resp['data'] )
    );
  }
}
