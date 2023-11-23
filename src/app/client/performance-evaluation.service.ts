import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientProject } from './client';
import { ProjectMemberResponse } from './project-member'
import { PerformanceEvaluation,PerformanceEvaluationResponse } from './performance-evaluation'

@Injectable({
  providedIn: 'root'
})
export class PerformanceEvaluationService {

 newEvaluation!: PerformanceEvaluation
 members!: Array<ProjectMemberResponse>
  private backUrl: string = environment.backBaseUrl;
  constructor(private http: HttpClient) { }
  
  
  getMembers(project_id: string, token: string): Observable<ProjectMemberResponse[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `${token}`})
    headers.append('Access-Control-Allow-Origin', '*')
    return this.http.get<ProjectMemberResponse[]>(`${this.backUrl}/projects/members/${project_id}`, { headers: headers })
  }
  
  evaluationCreate(newEvaluation: PerformanceEvaluation, token: string): Observable<any> {
        const headers_request = new HttpHeaders({'Authorization': `${token}`})
        headers_request.append('Access-Control-Allow-Origin', '*')
        console.log(`Token ${token}`)
        return this.http.post<any>(`${this.backUrl}/evaluations`, {
            "score": newEvaluation.score,"details": newEvaluation.details, "project_id": newEvaluation.project_id,
              "person_id": newEvaluation.person_id, "member_id": newEvaluation.member_id
        },{ headers: headers_request})
       }
  
  getEvaluations(projectId:string, token :string):Observable<PerformanceEvaluationResponse[]> {
        const headers = new HttpHeaders({'Content-Type': 'application/json',
        'Authorization': `${token}`})
        headers.append('Access-Control-Allow-Origin', '*')
        return this.http.get<PerformanceEvaluationResponse[]>(`${this.backUrl}/evaluations/${projectId}`, { headers: headers })
    }
}
