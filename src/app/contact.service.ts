import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl="http://a6199f5ecae07439996ac09a976e6efa-3862739.ap-south-1.elb.amazonaws.com/"

  constructor(private httpClient:HttpClient) { }

  createContact(contact:Contact):Observable<string>{
    return this.httpClient.post(`${this.baseUrl}/contact`, contact, { responseType:"text" } );
  }

  getContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  findContactById(id:number):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`);
  }

  deleteContactByid(id:number):Observable<string>{
    return this.httpClient.delete(`${this.baseUrl}/contact/${id}`, {responseType:"text"});
  }

}
