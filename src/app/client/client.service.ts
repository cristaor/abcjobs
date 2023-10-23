import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from './client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

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
  
}
