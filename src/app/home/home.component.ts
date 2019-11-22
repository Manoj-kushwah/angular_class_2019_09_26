import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'app name';
  constructor(private auth: AuthService, private api: ApiService, private route: Router) { }

  ngOnInit() {
    if (this.auth.isAuth()) {
      this.route.navigate(['admin']);
    } else {
      let str = localStorage.getItem('sessionUser');
      let session = JSON.parse(str);
      if (session) {
        this.api.login(session.email, session.password);
      }
    }
  }

}
