import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client, ClientProject } from './client';


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
        
        return this.http.post<any>(`${this.backUrl}/companies`, {
            "document": document,"documentType": documentType, "firstName": firstName, "lastName": lastName,
            "username": username, "password": password, "taxpayerId": taxpayerId, "name": name, "country": country,
            "city": city, "years": years, "address": address, "phoneNumber": phoneNumber, "profile": profile,
            "position": position
        })  
       }
  projectCreate(newProject: ClientProject, token: string): Observable<any> {  
        const headers_request = new HttpHeaders({'Authorization': `${token}`})
        console.log(`Token ${token}`)
        return this.http.post<any>(`${this.backUrl}/projects`, {
            "projectName": newProject.project_name,"startDate": newProject.start_date, "active": newProject.active,  "details": newProject.details
        },{ headers: headers_request})  
       }
}
