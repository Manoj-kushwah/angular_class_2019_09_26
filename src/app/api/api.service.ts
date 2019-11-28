import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlLogin: string = "http://jsistudentportal.000webhostapp.com/api/user/login/";
  private urlGetUsers: string = "http://jsistudentportal.000webhostapp.com/api/user/get/";
  private urlAddUsers: string = "http://jsistudentportal.000webhostapp.com/api/user/add/";
  constructor(private http: Http, private auth: AuthService, private route: Router) { }

  public login(email: string, password: string): Promise<any> {
    return this.http.get(`${this.urlLogin}?email=${email}&password=${password}`)
      .toPromise()
      .then(res => res.json()).catch(resion => resion).then(res => {
        if (res.data != null) {
          this.auth.setUser(res.data);
          localStorage.setItem('sessionUser', JSON.stringify({email: email, password: password}));
          this.route.navigate(['admin']);
        }
        return res;
      });
  }
  public users(): Promise<any> {
    return this.http.get(`${this.urlGetUsers}`)
      .toPromise()
      .then(res => res.json()).catch(resion => resion);
  }
  public addUser(user: any): Promise<any> {
    let data: any = {};
    data['firstName'] = user.firstName1;
    data['lastName'] = user.lastName1;
    data['email'] = user.email1;
    data['password'] = user.password1;
    data['role'] = user.role1;
    console.log('ApiService: ', data);
    return fetch(`${this.urlAddUsers}`, {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => res.json()).catch(resion => resion);
    // return this.http.post(`${this.urlAddUsers}`, user)
    //   .toPromise()
    //   .then(res => res.json()).catch(resion => resion);
  }
}
