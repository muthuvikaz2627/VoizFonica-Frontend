import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
    //private baseUrl = 'http://localhost:8080/api/';
    private baseUrl = 'http://localhost:8888/';  
    constructor(private http:HttpClient) { }
    getRegisterList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`+'reg/getregistration');  //will change ...As Per ordermanagement
 
    }
    //below this all the API will be there. We can have the multiple conect
 
    createRegistration(register: object): Observable<object> {
 
      return this.http.post(`${this.baseUrl}`+'reg/addregistration', register);
 
    }
 
 
 
    deleteRegistration(id: number): Observable<any> {
 
      return this.http.delete(`${this.baseUrl}reg/deleteregister/${id}`, { responseType: 'text' });
 
    }
 
 
 
    getRegistration(id: number): Observable<Object> {
 
      return this.http.get(`${this.baseUrl}/registration/${id}`);
 
    }
 
 
 
    updateRegistration(id: number, value: any): Observable<Object> {
 
      return this.http.post(`${this.baseUrl}/update-register/${id}`, value);
 
    }
 
 
  }