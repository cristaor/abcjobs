import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate, CandidateAcademicInfo, CandidateTechnicalRoleInfo, CandidateTechnologyInfo, TechnologyResponse } from './candidate';
import { UserAuthenticated } from '../client/client-login';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  MapperException: Record<string, string> = {
    "ABC01": "El profesional al que se intenta crear el registro no existe",
  }

  private headers1 = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  get_error_message(error_code: string){
    const error_message = this.MapperException[error_code]
    if (error_message !== undefined){
      return error_message
    }

    return "Error inesperado"
  }

  

  private backUrl: string = environment.backBaseUrl;
  
  constructor(private http: HttpClient) { 
    

  }

  
   candidateCreate(username: string, password: string, document: string, documentType: string, firstName: string, lastName: string, phoneNumber: string,
   age: number, originCountry: string, residenceCountry: string,  residenceCity: string, address: string ): Observable<any> {
        return this.http.post<any>(`${this.backUrl}/candidates`, { "document": document, "documentType": documentType, "firstName": firstName,
        "lastName": lastName, "phoneNumber": phoneNumber, "username": username, "password": password, "role": "CANDIDATE", "birthDate": "2001-01-01",
         "age": age, "originCountry": originCountry, "residenceCountry": residenceCountry, "residenceCity": residenceCity, "address": address}
         , {headers: this.headers1})
    }

    addAcademicoInfo(academic_info: CandidateAcademicInfo, token: string): Observable<any> {

      
    let headers_s = new HttpHeaders().set('Authorization', token)
    headers_s.append('Access-Control-Allow-Origin', '*')
    return this.http.post<any>(`${this.backUrl}/candidates/myself/academic_info`, { 
      "title": academic_info.title, 
      "institution": academic_info.institution,
      "country": academic_info.country, 
      "year_start_date": academic_info.start_date_year,
      "month_start_date": academic_info.start_date_month,
      "year_end_date": academic_info.end_date_year,
      "month_end_date": academic_info.end_date_month,
      "description": academic_info.description}, {headers: headers_s})
    }

    addTechnicalRoleInfo(technical_role: CandidateTechnicalRoleInfo, token: string): Observable<any> {

      
      let headers_s = new HttpHeaders().set('Authorization', token);
      headers_s.append('Access-Control-Allow-Origin', '*')
      return this.http.post<any>(`${this.backUrl}/candidates/myself/technical_roles`, { 
        "role": technical_role.name, 
        "experience_years": technical_role.experience_years,
        "description": technical_role.description
      },{headers: headers_s})
    }

    addTechnologyInfo(technology_info: CandidateTechnologyInfo, token: string): Observable<any> {

      
      let headers_s = new HttpHeaders().set('Authorization', token);
      headers_s.append('Access-Control-Allow-Origin', '*')
      return this.http.post<any>(`${this.backUrl}/candidates/myself/technologies`, { 
        "name": technology_info.name, 
        "experience_years": technology_info.experience_years,
        "level": technology_info.level,
        "description": technology_info.description
      },{headers: headers_s})
    }
    
    getTechnologies(token: string): Observable<TechnologyResponse[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 
    'Authorization': `${token}`})
    headers.append('Access-Control-Allow-Origin', '*')
    return this.http.get<TechnologyResponse[]>(`${this.backUrl}/technologies`, { headers: headers })
  }
}
