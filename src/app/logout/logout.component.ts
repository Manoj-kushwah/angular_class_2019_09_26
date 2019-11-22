import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
    this.auth.setUser(null);
    localStorage.removeItem('sessionUser');
    this.route.navigate(['']);
  }

}
