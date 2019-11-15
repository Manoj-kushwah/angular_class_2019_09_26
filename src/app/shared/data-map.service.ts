import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataMapService {
  private userList: any[];
  constructor() { }

  public getUserList(): any[]{
    return this.userList;
  }
}
