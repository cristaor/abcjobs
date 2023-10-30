import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ClientLoginService} from 'src/app/client/client-login.service';
import { environment } from 'src/environments/environment';
import { Observable,of,map,catchError } from 'rxjs';
import {concatMap} from 'rxjs/operators';
import {TestRequest,TestResponse} from 'src/app/test/test';
@Injectable({
  providedIn: 'root'
})
export class TestService {


constructor(private http: HttpClient,private loginService:ClientLoginService) { }

create_test(test_request: TestRequest): Observable<boolean> {
  let url = environment.backBaseUrl +'/tests';
  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token });
      let options = { headers: headers };
      let result = this.http.post<TestResponse>(url,test_request,options);
      return result.pipe(map(r=>
        true
        ),catchError(() =>
        of(false))
        );
    }
    )).pipe(
      catchError(() =>
         of(false))
    );

}


}

