import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-jewel',
  templateUrl: './cat-jewel.component.html',
  styleUrls: ['./cat-jewel.component.css']
})
export class CatJewelComponent implements OnInit {
  jewellCat =[];
  All;

  constructor(private gotdata : FetchService , private route : Router) { }

  ngOnInit(): void {
    this.gotdata.Getproduct().subscribe((data)=>{
      this.All = data;
      console.log(this.All);
      for(let item of this.All){
        if(item.category === "jewelery"){
          this.jewellCat.push(item);
        }
      }
      console.log(this.jewellCat);
      //console.log(this.womenCat);
      
    })
  }
  showData(id){
    this.route.navigate([`Details/${id}`]);

  }

}
