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
}
