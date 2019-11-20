import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlLogin: string = "http://jsistudentportal.000webhostapp.com/api/user/login/";
  private urlGetUsers: string = "http://jsistudentportal.000webhostapp.com/api/user/get/";
  constructor(private http: Http) { }

  public login(email: string, password: string): Promise<any> {
    return this.http.get(`${this.urlLogin}?email=${email}&password=${password}`)
      .toPromise()
      .then(res => res.json()).catch(resion => resion);
  }
  public users(): Promise<any> {
    return this.http.get(`${this.urlGetUsers}`)
      .toPromise()
      .then(res => res.json()).catch(resion => resion);
  }
}
