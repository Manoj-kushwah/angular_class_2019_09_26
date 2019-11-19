import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'app name';
  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
    if (this.auth.isAuth()) {
      this.route.navigate(['admin']);
    }
  }

}
