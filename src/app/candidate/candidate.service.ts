import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate, CandidateAcademicInfo } from './candidate';
import { UserAuthenticated } from '../client/client-login';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  MapperException: Record<string, string> = {
    "ABC01": "El profesional al que se intenta crear el registro académico no existe",
  }

  get_error_message(error_code: string){
    const error_message = this.MapperException[error_code]
    if (error_message !== undefined){
      return error_message
    }

    return "Error inesperado"
  }

  

  private backUrl: string = environment.backBaseUrl;
  
  constructor(private http: HttpClient) { }

  
   candidateCreate(username: string, password: string, document: string, documentType: string, firstName: string, lastName: string, phoneNumber: string,
   age: number, originCountry: string, residenceCountry: string,  residenceCity: string, address: string ): Observable<any> {
        return this.http.post<any>(`${this.backUrl}/candidates`, { "document": document, "documentType": documentType, "firstName": firstName,
        "lastName": lastName, "phoneNumber": phoneNumber, "username": username, "password": password, "role": "CANDIDATE", "birthDate": "2001-01-01",
         "age": age, "originCountry": originCountry, "residenceCountry": residenceCountry, "residenceCity": residenceCity, "address": address})
    }

    addAcademicoInfo(academic_info: CandidateAcademicInfo, token: string): Observable<any> {

      
    let headers_s = new HttpHeaders().set('Authorization', token);
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
}
