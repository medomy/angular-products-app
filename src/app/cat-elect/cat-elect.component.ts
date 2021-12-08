import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-elect',
  templateUrl: './cat-elect.component.html',
  styleUrls: ['./cat-elect.component.css']
})
export class CatElectComponent implements OnInit {
  elecCat =[];
  All;

  constructor(private gotdata : FetchService , private route : Router) { }

  ngOnInit(): void {
    this.gotdata.Getproduct().subscribe((data)=>{
      this.All = data;
      console.log(this.All);
      for(let item of this.All){
        if(item.category === "electronics"){
          this.elecCat.push(item);
        }
      }
      console.log(this.elecCat);
      //console.log(this.womenCat);
      
    })
  }
  showData(id){
    this.route.navigate([`Details/${id}`]);

  }

}
