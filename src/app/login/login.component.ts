import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = null;
  public password: string = null;
  constructor(private api: ApiService, private auth: AuthService, private route: Router) { }

  ngOnInit() {
    if (this.auth.isAuth()) {
      this.route.navigate(['admin']);
    }
  }

  loginProccess(e){
    console.log(this.email, this.password);
    this.api.login(this.email,this.password).then((res)=>{
      console.log(res);
      return res;
    }).catch(err =>{
      console.log(err);
      return err;
    })
    return false;
  }
}
