import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../../models/products';
import { StockPipe } from '../../stock.pipe';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input() pro :Products = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count_in_stock": 120
    }};
  @Output() transferData = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }
  showData(){
    this.transferData.emit(this.pro);
  }

}
