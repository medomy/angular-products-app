import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderservService {
  private isloading = new BehaviorSubject(false);

  constructor() { }

  getIsloading(){
    return this.isloading;
  }
  setIsloading(newval){
    this.isloading.next(newval);
  }
}
