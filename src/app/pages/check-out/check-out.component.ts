import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to -cart/add-to-cart.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  totalNum : number = 0;
  totalPrice : number = 0;
  email : string = "";
  name : string = "";
  address : string = "";
  emailErr : boolean = true;
  nameErr : boolean = true;
  addressErr : boolean = true;

  constructor(private addToCartService : AddToCartService , private loginService : LoginService ) { }

  ngOnInit(): void {
    this.addToCartService.GetCounter().subscribe((counter)=> this.totalNum = counter);
    this.addToCartService.getTotalPrice().subscribe((total)=> this.totalPrice = total);
    this.loginService.getUser().subscribe((user)=>{
      this.email = user ? user.email : "";
      this.name = user ? user.name : '';
    })
  }

  validateEmail($event){
    const emailRegex : RegExp = /^[a-zA-Z0-9.!#$%&’*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test($event)) this.emailErr = true;
    else this.emailErr = false;
  }
  validateName($event : string){
    const nameRegex : RegExp = /^[a-z ,A-Z.'-]{6,}+$/i;
    if ($event.length === 0 || !nameRegex.test($event)) this.nameErr = true;
    else this.nameErr = false;

  }
  validateAddress($event : string){
    const addressRegex : RegExp = /^[#.0-9a-zA-Z\s,-]+$/;
    if ($event.length === 0 || !addressRegex.test($event)) this.addressErr = true;
    else this.addressErr = false; 
  }

  confirm(){
    
  }

}
