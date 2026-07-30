import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailRequest } from '../models/email-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Email {

  private apiurl = "http://localhost:8080/api/email/generate";

  constructor(private http:HttpClient){}

  generateReply(request: EmailRequest) : Observable<string>{

    return this.http.post(this.apiurl,request,{

        responseType: 'text'
    });

  }

}
