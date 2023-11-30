import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ClientLoginService} from 'src/app/client/client-login.service';
import { environment } from 'src/environments/environment';
import { Observable,of,map,catchError, Subscription } from 'rxjs';
import {concatMap} from 'rxjs/operators';

import {AbilityResult, RegisterInterview,ScheduleInterviewRequest,ClientProject,ScheduleInterviewResponse,PendingInterview, AbilityResponse,InterviewResult,CandidateResponse, ProjectMemberResponse,Interview} from './interview';

import { ProfileListDetail } from './../client/project'
@Injectable({
  providedIn: 'root'
})
export class InterviewService {


constructor(private http: HttpClient,private loginService:ClientLoginService) { }

get_projects(): Observable<Array<ProfileListDetail>> {

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
      let url = environment.backBaseUrl +'/projects/enabled_profiles';
      let result = this.http.get<Array<ProfileListDetail>>(url,options);
      return result;
    }
    )).pipe(
      catchError(() =>
         of([]))
    );
}

get_abilities(): Observable<AbilityResponse[]> {
  const headers = new HttpHeaders({'Content-Type': 'application/json'})
  headers.append('Access-Control-Allow-Origin', '*')
  return this.http.get<AbilityResponse[]>(`${environment.backBaseUrl}/abilities`, { headers: headers })
}


get_interviews(): Observable<Array<Interview>> {

  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token });
      let options = { headers: headers };

      let url = environment.backBaseUrl +'/interviews?candidate='+ res.person_id;
      let result = this.http.get<Array<Interview>>(url,options);
      return result;
    }
    )).pipe(
      catchError(() =>
         of([]))
    );
}


get_interview_results(): Observable<Array<InterviewResult>> {

  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token });
      let options = { headers: headers };

      let url = environment.backBaseUrl +'/interviews/result';
      let result = this.http.get<Array<InterviewResult>>(url,options);
      return result;
    }
    )).pipe(
      catchError(() =>
         of([]))
    );
}

get_interview_result(id:BigInteger): Observable<InterviewResult> {

  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token });
      let options = { headers: headers };

      let url = environment.backBaseUrl +'/interviews/result/'+ id;
      let result = this.http.get<InterviewResult>(url,options);
      return result;
    }
    ));
}

getMembers(project_id:string): Observable<Array<ProjectMemberResponse>> {

  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token });
      let options = { headers: headers };
      let url = environment.backBaseUrl +'/projects/members/'+project_id;
      let r= this.http.get<Array<ProjectMemberResponse>>(url,options);

      return r;
    }
    )).pipe(
      catchError(() =>
         of([]))
    );
}


schedule_interview(results: ScheduleInterviewRequest): Observable<boolean> {
  let url = environment.backBaseUrl +'/interviews';
  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token });
      let options = { headers: headers };
      let result = this.http.post<ScheduleInterviewResponse>(url,results,options);
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


getProject(projectId: string): Observable<Array<ClientProject>> {

  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token });
      let options = { headers: headers };
      let url = environment.backBaseUrl +'/projects/'+projectId;
      let result = this.http.get<Array<ClientProject>>(url,options);
      return result;
    }
    ));
}





get_pending_interviews(): Observable<Array<PendingInterview>> {

  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token });
      let options = { headers: headers };
      let url = environment.backBaseUrl +'/pending-interviews';
      let result = this.http.get<Array<PendingInterview>>(url,options);
      return result;
    }
    )).pipe(
      catchError(() =>
         of([]))
    );
}



register_interview(results: RegisterInterview): Observable<boolean> {
  let url = environment.backBaseUrl +'/interviews/result';
  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token });
      let options = { headers: headers };
      let result = this.http.post<ScheduleInterviewResponse>(url,results,options);
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


