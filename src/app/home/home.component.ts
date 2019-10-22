import { Component, OnInit } from '@angular/core';
import { DataMapService } from '../shared/data-map.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private users: User[];
  public listFilterKey:string = '';
  constructor(private dataMap: DataMapService) { 
    console.log("HomeComponent: ", dataMap);
    console.log("HomeComponent: getUserList: ", dataMap.getUserList());
    this.users = dataMap.getUserList();
  }

  ngOnInit() {
  }

  public getUsers(): User[]{
    return this.users;
  }

  public filterName(event: any): void{
    console.log("HomeComponent: filterName: event: ", event);
    this.listFilterKey = (event && event.target.value);
    console.log("HomeComponent: filterName: listFilterKey: ", this.listFilterKey);
  }
}
