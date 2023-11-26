import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ClientLoginService} from 'src/app/client/client-login.service';
import { environment } from 'src/environments/environment';
import { Observable,of,map,catchError, Subscription } from 'rxjs';
import {concatMap} from 'rxjs/operators';

import {ScheduleInterviewRequest,ScheduleInterviewResponse, CandidateResponse, ProjectMemberResponse,Interview, Company, Project, InterviewResult, InterviewResultDetail, CandidateDetail} from './interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  private backUrl: string = environment.backBaseUrl;


constructor(private http: HttpClient,private loginService:ClientLoginService) { }

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

get_companies(): Observable<Array<Company>> {

  let result = this.loginService.who_i_am();
  return result.pipe(
    concatMap(res => {
      let token = res.auth_headers.get("Authorization") || "token"
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token });
      let options = { headers: headers };

      let url = environment.backBaseUrl +'/companies';
      let result = this.http.get<Array<Company>>(url,options);
      return result;
    }
    )).pipe(
      catchError(() =>
         of([]))
    );
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

getProjectsByCompany(company_id: string): Observable<Project[]> {
  const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'})
  
  
  return this.http.get<Project[]>(`${this.backUrl}/projects/?company_id=`+company_id, { headers: headers })
}

getInterviewResults(): Observable<InterviewResult[]> {
  const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'})
    
  return this.http.get<InterviewResult[]>(`${this.backUrl}/interviews/result`, { headers: headers })
}

getInterviewResultById(result_id: string): Observable<InterviewResultDetail> {
  const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'})
    
  return this.http.get<InterviewResultDetail>(`${this.backUrl}/interviews/result/`+result_id, { headers: headers })
}

getCandidatesByDocument(document: string): Observable<CandidateDetail[]> {
  const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'})
    
  return this.http.get<CandidateDetail[]>(`${this.backUrl}/candidates?documents`+document, { headers: headers })
}





}

