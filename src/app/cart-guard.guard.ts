import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddToCartService } from './services/add-to -cart/add-to-cart.service';



@Injectable({
  providedIn: 'root'
})
export class CartGuardGuard implements CanActivate {
  
  count;
  // Making a guard on cart page to make it unavilable when no items added (don't forget to use the service in constructor)
  constructor(ser:AddToCartService){
    ser.GetCounter().subscribe((counter)=>{
      this.count = counter;
    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.count === 0){
        alert("No added items yet");
        console.log("No added items yet");
        return false;
      }
      else{
        return true
      }
      
  }
  
}
