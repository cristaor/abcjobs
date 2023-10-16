import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
    
  private backUrl: string = environment.backBaseUrl;
  
  //
  constructor(private http: HttpClient) { }
  
   candidateCreate(username: string, password: string, document: string, documentType: string, firstName: string, lastName: string, phoneNumber: string,
   age: number, originCountry: string, residenceCountry: string,  residenceCity: string, address: string ): Observable<any> {
        return this.http.post<any>(`${this.backUrl}/candidate`, { "document": document, "documentType": documentType, "firstName": firstName,
        "lastName": lastName, "phoneNumber": phoneNumber, "username": username, "password": password, "role": "CANDIDATE", "birthDate": "2001-01-01",
         "age": age, "originCountry": originCountry, "residenceCountry": residenceCountry, "residenceCity": residenceCity, "address": address})
    }
}
