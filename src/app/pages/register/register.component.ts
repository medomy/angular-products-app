import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { __exportStar } from 'tslib';
import {MustMatch} from'./CheckPassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegestirationForm : FormGroup;

  constructor(private fb:FormBuilder , private loginService : LoginService) { }

  ngOnInit(): void {
    // used form builder for must match function usage to confirm password
    this.RegestirationForm = this.fb.group({
      FormalName: ["",Validators.required , Validators.pattern(/^[a-z ,A-Z.'-]{6,}+$/i)],
      UserName: ["",[Validators.required,Validators.pattern("/^[\S]+$/gm")]],
      Emailreg: ["",[Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&’*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      Password: ["",[Validators.required,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")]],
      PasswordCheck: ["",Validators.required],
    },{
      validator: MustMatch('Password', 'PasswordCheck')
    }
    )
  }
  Register(){
    this.loginService.login({
      name : this.RegestirationForm.controls.FormalName.toString(),
      userName : this.RegestirationForm.controls.UserName.toString(),
      email : this.RegestirationForm.controls.Emailreg.toString(),
      password : this.RegestirationForm.controls.Password.toString()
    })
  }

  

}

