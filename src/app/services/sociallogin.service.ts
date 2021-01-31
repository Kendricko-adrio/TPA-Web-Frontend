import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {

  url;
  constructor(
    private http: HttpClient
  ) { }
  Saveresponse(response){
    this.url = 'http://localhost:64726/Api/Login/Saveresponse'
    return this.http.post(this.url, response)
  }
}
