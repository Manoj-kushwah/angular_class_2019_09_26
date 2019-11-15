import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private loginUrl: string = "http://jsistudentportal.000webhostapp.com/api/user/login/";
  constructor(private http: Http) { }

  public login(email: string, password: string): Promise<any>{
    return this.http.get(`${this.loginUrl}?email=${email}&password=${password}`)
    .toPromise()
    .then(res => res.json()).catch(resion=> resion);
  }
}
