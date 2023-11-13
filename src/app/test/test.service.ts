import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ClientLoginService} from 'src/app/client/client-login.service';
import { environment } from 'src/environments/environment';
import { Observable,of,map,catchError, Subscription } from 'rxjs';
import {concatMap} from 'rxjs/operators';
import {CandidateResponse,TestItemResponse, TestRequest,TestResponse, TestResultRequest} from 'src/app/test/test';
import { isNull } from 'cypress/types/lodash';
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





register_result_test(results: Array<TestResultRequest>): Observable<boolean> {
  let url = environment.backBaseUrl +'/tests/results';
  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token });
      let options = { headers: headers };
      let result = this.http.post<TestResponse>(url,results,options);
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

get_avalible_tests(): Observable<Array<TestItemResponse>> {

  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token });
      let options = { headers: headers };
      let url = environment.backBaseUrl +'/enabled_tests';
      let result = this.http.get<Array<TestItemResponse>>(url,options);
      return result;
    }
    )).pipe(
      catchError(() =>
         of([]))
    );
}


get_candidate_by_ids(ids:Array<string>): Observable<Array<CandidateResponse>> {

  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token });
      let options = { headers: headers };
      console.log(ids);
      if ( ids.length==1 && ids[0]==""){
        return of([]);
      }
      let url = environment.backBaseUrl +'/candidates?documents='+ids.join(",");
      let result = this.http.get<Array<CandidateResponse>>(url,options);
      return result;
    }
    )).pipe(
      catchError(() =>
         of([]))
    );
}





}

