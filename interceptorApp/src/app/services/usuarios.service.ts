import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
    }).pipe(
      map( resp => resp['data'] ),
      catchError( this.controlError )
    );
  }

  controlError( error: HttpErrorResponse ) {
    console.log('Sucedió un error');
    console.warn(error);

    return throwError('Error personalizado');
  }
}
