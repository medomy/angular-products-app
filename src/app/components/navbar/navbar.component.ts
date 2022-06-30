import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to -cart/add-to-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  counter;

  constructor(private added :AddToCartService) { }


  ngOnInit(): void {
    this.counter =this.added.GetCounter();
  }

}
