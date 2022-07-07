import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import { AddToCartService } from 'src/app/services/add-to -cart/add-to-cart.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  counter;
  user : null | User = null;

  constructor(private added :AddToCartService , private loginService : LoginService) { }


  ngOnInit(): void {
    this.counter =this.added.GetCounter();
    this.loginService.getUser().subscribe((u)=> this.user = u);
  }

}
