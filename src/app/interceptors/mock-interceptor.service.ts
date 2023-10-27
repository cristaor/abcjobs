import { HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; //para manejar errores
import { ToastrService } from 'ngx-toastr'; //instalar dependencias

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService extends HttpErrorResponse {

  constructor(private toastrService: ToastrService) { super(toastrService) }
 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   return next.handle(request)
     .pipe(
       catchError((httpErrorResponse: HttpErrorResponse) => {
         let errorMesagge = '';
         let errorType = '';

         if (httpErrorResponse.error instanceof ErrorEvent) {
           //errorType = "Client side error"
           errorMesagge = httpErrorResponse.error.error;
         } else {
           errorType = "Server side error"
           if (httpErrorResponse.status === 0) {
             errorMesagge = "No hay conexión con el servidor";
           } else {
             errorMesagge = `${httpErrorResponse.status}: ${httpErrorResponse.error.error}`;
           }
           this.toastrService.error(errorMesagge, errorType, { closeButton: true });
         }
         return throwError(()=> new Error(errorMesagge));
       })
     )
 }
}