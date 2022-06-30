import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchService } from 'src/app/services/fetch/fetch.service';

@Component({
  selector: 'app-cat-men',
  templateUrl: './cat-men.component.html',
  styleUrls: ['./cat-men.component.css']
})
export class CatMenComponent implements OnInit {
  menCat =[];
  All;

  constructor(private gotdata : FetchService , private route : Router) { }

  ngOnInit(): void {
    this.gotdata.Getproduct().subscribe((data)=>{
      this.All = data;
      console.log(this.All);
      for(let item of this.All){
        if(item.category === "men's clothing"){
          this.menCat.push(item);
        }
      }
      console.log(this.menCat);
      //console.log(this.womenCat);
      
    })
  }
  showData(id){
    this.route.navigate([`Details/${id}`]);

  }

}
