import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ClientLoginService} from 'src/app/client/client-login.service';
import { environment } from 'src/environments/environment';
import { Observable,of,map,catchError } from 'rxjs';
import {concatMap} from 'rxjs/operators';
import {ProfileResponse,ProfileRequest,ProfileListDetail} from 'src/app/client/project';
import {ProjectMember} from 'src/app/client/project-member';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

private backUrl: string = environment.backBaseUrl;
newMember!:ProjectMember
constructor(private http: HttpClient,private loginService:ClientLoginService) { }

create_profile(request: ProfileRequest): Observable<boolean> {
  let url = environment.backBaseUrl +'/projects/profiles';
  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token });
      let options = { headers: headers };
      let result = this.http.post<ProfileResponse>(url,request,options);
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

get_profiles(): Observable<Array<ProfileListDetail>> {

  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token });
      let options = { headers: headers };
      res.person_id
      let url = environment.backBaseUrl +'/projects/';
      let result = this.http.get<Array<ProfileListDetail>>(url,options);
      return result;
    }
    )).pipe(
      catchError(() =>
         of([]))
    );
}

memberCreate(personId:string, projectId:string, profileId:string, token: string): Observable<any> {  
        const headers_request = new HttpHeaders({'Authorization': `${token}`})
        
        console.log(`Token ${token}`)
        return this.http.post<any>(`${this.backUrl}/members`, {
            "active": 1,"description": "Nuevo miembro","personId": personId, "profileId": profileId, "projectId": projectId
        },{ headers: headers_request})  
       }

}

