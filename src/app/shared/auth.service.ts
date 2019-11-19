import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any = null;
  constructor() { }

  /**
   * isAuth
   */
  public isAuth(): boolean {
    return Boolean(this.user&&this.user.userId);
  }

  /**
   * setUser
   */
  public setUser(user: any): void {
    this.user = user;
  }

  /**
   * getUser
   */
  public getUser(): any {
    return this.user;
  }
}
