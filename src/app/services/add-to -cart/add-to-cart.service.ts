import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  Ids:Array<number>;
  AddedProducts=[];

  private counter = new BehaviorSubject(0);
  private oneItemCounter = new BehaviorSubject(1);
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

  constructor() { }
}
