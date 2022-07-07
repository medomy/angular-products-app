import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from 'src/app/models/products';
@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  Ids:Array<number>;
  AddedProducts=[];

  private counter = new BehaviorSubject(0);
  private oneItemCounter = new BehaviorSubject(1);
  private totalPrice : BehaviorSubject<number> = new BehaviorSubject(0);
  // for all items counte
  GetCounter(){
    return this.counter;
  }
  SetCounter(newval){
    this.counter.next(newval);
  }
  // Adding to Array to cart
  AddedToCartid(id){
    this.Ids.push(id);
    return this.Ids;
  }
  AddedToCartobject(obj){
    this.AddedProducts.push(obj);
  }
  setAddedToCartItems(products : Products[]){
    this.AddedProducts = products;
  }
  GetAddedToCartobject(){
    return this.AddedProducts;
  }
  // for one item counter
  GetoneItemCounter(){
    return this.oneItemCounter;
  }
  SetoneItemCounter(val){
    this.oneItemCounter.next(val);
  }

  setTotalPrice(total): void{
    this.totalPrice.next(total);
  }
  getTotalPrice() : BehaviorSubject<number>{
    return this.totalPrice
  }

  constructor() { }
}
