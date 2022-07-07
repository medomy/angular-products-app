import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to -cart/add-to-cart.service';
import { FetchService } from 'src/app/services/fetch/fetch.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ID;
  Product;
  counter;
  OneItemCounter;
  ITemCounter : number = 0;
  isAdded : boolean = false;
  constructor(private rou : ActivatedRoute ,private Fet : FetchService,private added : AddToCartService ) { }

  ngOnInit(): void {
    this.rou.params.subscribe((par)=>{
      this.ID = par["id"];
      console.log(this.ID);
    });

    this.Fet.Getoneproduct(this.ID).subscribe((pr)=> {
      this.Product=pr;
      console.log(this.Product);
    });
    this.added.GetCounter().subscribe((count)=> this.counter = count);
    this.added.GetoneItemCounter().subscribe((count)=> this.OneItemCounter= count);
    this.Product["count"] = this.ITemCounter;
  }
  AddToCart(){
    this.added.SetCounter(this.counter + 1);
    // Handling passing the one item count for the cart page
    
    //this.added.SetoneItemCounter(this.OneItemCounter + 1);
    //this.added.GetoneItemCounter().subscribe((count)=>this.Product["count"] = count);

    // Handling passing products without redunduncy to the cart page
    if(!this.added.GetAddedToCartobject().includes(this.Product)){
      this.added.AddedToCartobject(this.Product);
    }
    /*this.added.GetAddedToCartobject().forEach((item)=>{
     if(item.id === this.Product.id){
      this.added.SetoneItemCounter(this.OneItemCounter + 1);
      this.added.GetoneItemCounter().subscribe((count)=>item["count"] = count);
     } 
    })*/
    
    console.log(this.added.GetAddedToCartobject());
    //console.log(this.OneItemCounter);
    console.log(this.added.GetCounter());
    this.Product["count"] = this.ITemCounter+1;
    this.ITemCounter++;
    this.isAdded = true;
  }

}
