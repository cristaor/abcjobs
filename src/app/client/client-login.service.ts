import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { environment } from 'src/enviroments/environment';
import { Observable,of,map } from 'rxjs';

import {ClientLogin,ClientLoginResponse, UserAuthenticated, MyselfResponse} from 'src/app/client/client-login';
@Injectable({
  providedIn: 'root'
})
export class ClientLoginService {


constructor(private http: HttpClient) { }

login(client_login: ClientLogin): Observable<ClientLoginResponse> {
  let url = environment.urlService +'user/login';
  let result = this.http.post<ClientLoginResponse>(url,client_login);
  console.info(result);
  return result.pipe(r =>{
    r.subscribe(res =>{
      console.warn(res)
      localStorage.setItem("token",res.token);
    });

    return r;
  });

  //return result.subscribe
}

who_i_am(): Observable<UserAuthenticated> {
  let url = environment.urlService +'user/myself';
  let token = localStorage.getItem("token");
  if (token === undefined){
    return of(new UserAuthenticated(false,"","",new Map()));
  }
  let headers = new HttpHeaders().set('Authorization', "Bearer "+token);
  let result = this.http.get<MyselfResponse>(url,{ headers: headers} );
  console.info(result);
  return result.pipe(
    map(res => {
      console.warn(res)
      localStorage.setItem("token",res.new_token);
      return new UserAuthenticated(true,res.role,res.username,new Map().set("Authorization","Bearer "+res.new_token));
    }));
  //return result.subscribe
}

}

