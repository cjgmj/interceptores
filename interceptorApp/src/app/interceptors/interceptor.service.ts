import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'token-usuario': 'SCF7WER93SDJCNL1109'
    });

    const reqClose = req.clone({
      headers: headers
    });

    return next.handle( reqClose ).pipe(
      catchError( this.controlError )
    );
  }

  controlError( error: HttpErrorResponse ) {
    console.log('Sucedió un error');
    console.warn(error);

    return throwError('Error personalizado');
  }
}
