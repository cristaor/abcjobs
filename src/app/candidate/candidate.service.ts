import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate, CandidateAcademicInfo } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
    
  private backUrl: string = environment.backBaseUrl;
  
  constructor(private http: HttpClient) { }
  
   candidateCreate(username: string, password: string, document: string, documentType: string, firstName: string, lastName: string, phoneNumber: string,
   age: number, originCountry: string, residenceCountry: string,  residenceCity: string, address: string ): Observable<any> {
        return this.http.post<any>(`${this.backUrl}/candidates`, { "document": document, "documentType": documentType, "firstName": firstName,
        "lastName": lastName, "phoneNumber": phoneNumber, "username": username, "password": password, "role": "CANDIDATE", "birthDate": "2001-01-01",
         "age": age, "originCountry": originCountry, "residenceCountry": residenceCountry, "residenceCity": residenceCity, "address": address})
    }

    add_academic_info(academic_info: CandidateAcademicInfo): Observable<any> {
           return this.http.post<any>(`${this.backUrl}/candidates/myself/academic_info`, { "person_id": "1", "title": academic_info.title, "institution": academic_info.institution,
           "country": academic_info.country, "start_date": academic_info.start_date_year+"-"+academic_info.start_date_month+"-01", "end_date": academic_info.end_date_year+"-"+academic_info.end_date_month+"-01", "description": academic_info.description})
       }
}
