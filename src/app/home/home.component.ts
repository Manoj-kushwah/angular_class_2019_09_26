import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'app name';
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.login('admin@gmail.com', '123').then(res=>{
      console.log('res: ', res);
      return res;
    }).catch(err => {
      console.log('err: ', err);
      return err;
    });
  }

}
