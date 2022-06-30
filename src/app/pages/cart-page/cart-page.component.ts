import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to -cart/add-to-cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  purshasedProducts =[];
  TotalPrice : number = 0;
  counter : number =0;
  constructor(private added : AddToCartService) { }

  ngOnInit(): void {

    this.purshasedProducts = this.added.GetAddedToCartobject();
    console.log(this.purshasedProducts);
    this.purshasedProducts.forEach((item)=>{
      this.TotalPrice += item.count * item.price 
    })
    this.added.GetCounter().subscribe((count)=>{
      this.counter = count;
    })

  }
  Add(id){
    
    this.purshasedProducts.forEach((item)=>{
      if(item.id === id){
        item.count ++;
      }
      

    })
    console.log(id);
    this.purshasedProducts.forEach((item)=>{
      this.TotalPrice = item.count * item.price 
    })
    this.added.SetCounter(this.counter+1);  

  }
  minus(id){
    console.log(id);
    this.purshasedProducts.forEach((item)=>{
      if(item.id === id){
        item.count --;
        if(item.count < 0){
          item.count = 0
      }    
      }
    })
    this.purshasedProducts.forEach((item)=>{
      this.TotalPrice = item.count * item.price 
      })
    this.added.SetCounter(this.counter-1);  
  }
  DeleteAll(){
    this.purshasedProducts = [];
    this.added.SetCounter(0);
  }

}
