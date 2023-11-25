import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ClientLoginService} from 'src/app/client/client-login.service';
import { environment } from 'src/environments/environment';
import { Observable,of,map,catchError, Subscription } from 'rxjs';
import {concatMap} from 'rxjs/operators';
import {ScheduleInterviewRequest,ScheduleInterviewResponse, CandidateResponse} from './interview';
import { isNull } from 'cypress/types/lodash';
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
      let url = environment.backBaseUrl +'/projects/';
      let result = this.http.get<Array<ProfileListDetail>>(url,options);
      return result;
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





}

