import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public userList:any[] = [];
  public query: string;
  public newUser: any = { password1: null, email1: null};
  public rePassword: string;
  constructor(private auth: AuthService, private route: Router, private api: ApiService) { }

  ngOnInit() {
    if (!this.auth.isAuth()) {
      this.route.navigate(['']);
    } else {
      this.api.users().then(res =>{
        console.log('res: ', res);
        if (res.data != null) {
          this.userList = res.data;
        }
      }, err => {
        console.log('err: ', err);
      });
    }
  }

  /**
   * addUser
   */
  public addUser(user: any) {
    // this.api.addUser()
  }

  /**
   * submitUser
   */
  public submitUser(event: any): any {
    console.log(event);
    console.log(this.newUser);
    let emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!(this.newUser.email1 && emailRegx.test(this.newUser.email1)) ) {
      console.log('Error: ', 'Invalid email.');
    } else if ( !(this.rePassword && this.rePassword.match(this.newUser.password1)) ) {
      console.log('Error: ', 'Did not match passowrd or re password.');
    } else {
      this.api.addUser(this.newUser).then((res) => {
        console.log('Created:', res);
        this.userList.unshift(res.data);
      }).catch((err) => {
        console.log('Error: ', err);
      })
    }
    return false;
  }
}
