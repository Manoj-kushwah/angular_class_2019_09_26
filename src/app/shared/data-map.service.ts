import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataMapService {
  private userList: User[] = [];
  constructor() { 
    for (let i=0; i<10; i++) {
      let user: User = new User;
      user.setFirstName("User");
      user.setLastName(""+i);
      user.setRole("user");
      user.setGender("male");
      user.setDob(""+new Date);
      this.userList.push(user);
      user = new User;
      user.setFirstName("User");
      user.setLastName(""+i);
      user.setRole("user");
      user.setGender("male");
      user.setDob(""+new Date);
      this.userList.push(user);
    }
  }

  public getUserList(): User[] {
    return this.userList;
  }
}
