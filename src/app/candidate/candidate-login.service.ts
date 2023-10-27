import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable,of,map,catchError } from 'rxjs';

import {CandidateLogin,CandidateLoginResponse, UserAuthenticated, MyselfResponse} from 'src/app/candidate/candidate-login';
@Injectable({
  providedIn: 'root'
})
export class CandidateLoginService {


constructor(private http: HttpClient) { }

login(client_login: CandidateLogin): Observable<boolean> {
  let url = environment.backBaseUrl +'/user/login';
  let result = this.http.post<CandidateLoginResponse>(url,client_login);
  console.info(result);
  return result
  .pipe(
    map(r => {
    localStorage.setItem("token",r.token);
    return true
  })
  ).pipe(
    catchError(() =>
       of(false))
  );

}

who_i_am(): Observable<UserAuthenticated> {
  let url = environment.backBaseUrl +'/user/myself';
  let token = localStorage.getItem("token");
  if (token === undefined){
    return of(new UserAuthenticated(false,"","",new Map(),""));
  }
  let headers = new HttpHeaders().set('Authorization', "Bearer "+token);
  let result = this.http.get<MyselfResponse>(url,{ headers: headers} );
  console.info(result);
  return result.pipe(
    map(res => {
      console.warn(res)
      localStorage.setItem("token",res.new_token);
      return new UserAuthenticated(true,res.role,res.username,
        new Map().set("Authorization","Bearer "+res.new_token),res.person_id);
    }
    ));

}

}

