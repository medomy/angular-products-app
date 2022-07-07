import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import User from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _user : BehaviorSubject<User> = new BehaviorSubject(null);
  constructor(private router : Router) { }
  login(user : User):void{
    this._user.next(user);
    this.router.navigate(['']);
  }

  getUser():BehaviorSubject<User>{
    return this._user;
  }

}
