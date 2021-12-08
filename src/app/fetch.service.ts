import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http : HttpClient) { }
  Getproduct(){
    return this.http.get("https://fakestoreapi.com/products");
  }
  Getoneproduct(id){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
