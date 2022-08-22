import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private baseUrl = 'http://localhost:8080/api/';
  private baseUrl = 'http://localhost:8999/';  
  private baseUrl2 = 'http://localhost:8999/email/send';
  getRegisterList: any;

 
  
  constructor(private http:HttpClient) { }
  //for sending mail
  SendMail(otp: any, to: any): Observable<any> {

    return this.http.get(`${this.baseUrl2}/${to}/${otp}`);

  }
  //for registration and login
  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'login/getuser');  //will change ...As Per ordermanagement

  }
  getContactList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'contact/getcontact');  //will change ...As Per ordermanagement

  }
  getPaymentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'payment/getpayment');  //will change ...As Per ordermanagement

  }
  getRegistrationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'reg/getregistration');  //will change ...As Per ordermanagement

  }
  //below this all the API will be there. We can have the multiple conect

  createUser(user: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'adduser', user);

  }
  createContact(contact: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'contact/addcontact', contact);

  }
  createPayment(payment: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'payment/addpayment', payment);

  }
  createRegistration(registration: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'reg/addregistration', registration);

  }



  deleteUser(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deleteuser/${id}`, { responseType: 'text' });

  }

  
  deletePayment(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deletepayment/${id}`, { responseType: 'text' });

  }



  getUser(id: number): Observable<Object> {

    return this.http.get(`${this.baseUrl}/user/${id}`);

  }

  getContact(id: number): Observable<Object> {

    return this.http.get(`${this.baseUrl}/contact/${id}`);

  }
  getPayment(id: number): Observable<Object> {

    return this.http.get(`${this.baseUrl}/payment/${id}`);

  }
  getRegistration(id: number): Observable<Object> {

    return this.http.get(`${this.baseUrl}/registration/${id}`);

  }


  updateUser(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}/update-user/${id}`, value);

  }

  updateContact(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}/update-contact/${id}`, value);

  }
  updatePayment(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}/update-payment/${id}`, value);

  }
  updateRegistration(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}/update-registration/${id}`, value);

  }

}


