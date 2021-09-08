import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLogin: boolean = false;
  constructor() {}

  authLogin(auth: any) {
    if (auth.userName === 'suvarna' && auth.password === 'suvarna123') {
      this.isLogin = true;
      return true;
    }
    return false;
  }
}
