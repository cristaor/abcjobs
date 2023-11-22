import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ClientLoginService} from 'src/app/client/client-login.service';
import { environment } from 'src/environments/environment';
import { Observable,of,map,catchError } from 'rxjs';
import {concatMap} from 'rxjs/operators';
import {ProfileResponse,ProfileRequest,ProfileListDetail} from 'src/app/client/project';
import {ProjectMember, ProjectMemberResponse } from 'src/app/client/project-member';
import { ClientProject} from './client';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

private backUrl: string = environment.backBaseUrl;
newMember!:ProjectMember
members!: Array<ProjectMemberResponse>
projects!: Array<ClientProject>

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
        'Access-Control-Allow-Origin': '*',
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
        headers_request.append('Access-Control-Allow-Origin', '*')
        console.log(`Token ${token}`)
        return this.http.post<any>(`${this.backUrl}/members`, {
            "active": 1,"description": "Nuevo miembro","personId": personId, "profileId": profileId, "projectId": projectId
        },{ headers: headers_request})  
       }
       
    getMembers(projectId:string, token :string):Observable<ProjectMemberResponse[]> {
        const headers = new HttpHeaders({'Content-Type': 'application/json',
        'Authorization': `${token}`})
        headers.append('Access-Control-Allow-Origin', '*')
        return this.http.get<ProjectMemberResponse[]>(`${this.backUrl}/projects/members/${projectId}`, { headers: headers })
    }
    getProject(projectId: number, token: string): Observable<ClientProject[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json',
    'Authorization': `${token}`})
    headers.append('Access-Control-Allow-Origin', '*')
    return this.http.get<ClientProject[]>(`${this.backUrl}/projects/${projectId.toString()}`, { headers: headers })
  }
}

