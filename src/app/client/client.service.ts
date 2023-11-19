import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client, ClientProject,CandidateRequestSearch,CandidateResponseSearch,TechnologyResponse,AbilityResponse  } from './client';
import { ProfileListDetail } from './project'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  newProject!: ClientProject
  private backUrl: string = environment.backBaseUrl;
  constructor(private http: HttpClient) { }

  clientCreate(document: string, documentType: string, firstName: string, lastName: string,
        username: string, password: string, taxpayerId: string, name: string, country: string,
        city: string, years: string, address: string, phoneNumber: string, profile: string,
        position: string ): Observable<any> {
        const headers = new HttpHeaders({'Content-Type': 'application/json',})
        headers.append('Access-Control-Allow-Origin', '*')
        
        return this.http.post<any>(`${this.backUrl}/companies`, {
            "document": document,"documentType": documentType, "firstName": firstName, "lastName": lastName,
            "username": username, "password": password, "taxpayerId": taxpayerId, "name": name, "country": country,
            "city": city, "years": years, "address": address, "phoneNumber": phoneNumber, "profile": profile,
            "position": position
        },{ headers: headers})
       }
  projectCreate(newProject: ClientProject, token: string): Observable<any> {
        const headers_request = new HttpHeaders({'Authorization': `${token}`})
        headers_request.append('Access-Control-Allow-Origin', '*')
        console.log(`Token ${token}`)
        return this.http.post<any>(`${this.backUrl}/projects`, {
            "projectName": newProject.project_name,"startDate": newProject.start_date, "active": newProject.active,  "details": newProject.details
        },{ headers: headers_request})
       }

  getProjects(token: string): Observable<ClientProject[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json',
    'Authorization': `${token}`})
    headers.append('Access-Control-Allow-Origin', '*')
    return this.http.get<ClientProject[]>(`${this.backUrl}/projects/myself`, { headers: headers })
  }
  getProfiles(project_id: string,token: string): Observable<ProfileListDetail[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `${token}`})
    headers.append('Access-Control-Allow-Origin', '*')
    return this.http.get<ProfileListDetail[]>(`${this.backUrl}/projects/profiles/${project_id}`, { headers: headers })
  }
  getTechnologies(token: string): Observable<TechnologyResponse[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': `${token}`})
    headers.append('Access-Control-Allow-Origin', '*')
    return this.http.get<TechnologyResponse[]>(`${this.backUrl}/technologies`, { headers: headers })
  }

  getAbilities(token: string): Observable<AbilityResponse[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `${token}`})
    headers.append('Access-Control-Allow-Origin', '*')
    return this.http.get<AbilityResponse[]>(`${this.backUrl}/abilities`, { headers: headers })
  }
  searchCandidate(request: CandidateRequestSearch, token: string): Observable<CandidateResponseSearch[]>
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `${token}`})
    headers.append('Access-Control-Allow-Origin', '*')
    return this.http.get<CandidateResponseSearch[]>(`${this.backUrl}/candidates/search?roleFilter=${request.roleFilter}&role=${request.role}&roleExperience=${request.roleExperience}&technologies=${request.technologies}&abilities=${request.abilities}&titleFilter=${request.titleFilter}&title=${request.title}&titleExperience=${request.titleExperience}`, { headers: headers })
  }
  getClientInfo(token: string): Observable<Client[]>{
      const headers = new HttpHeaders({'Content-Type': 'application/json',
    'Authorization': `${token}`})
    headers.append('Access-Control-Allow-Origin', '*')
    return this.http.get<Client[]>(`${this.backUrl}/companies/myself`, { headers: headers })
  }
}
