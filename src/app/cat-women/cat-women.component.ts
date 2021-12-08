import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cat-women',
  templateUrl: './cat-women.component.html',
  styleUrls: ['./cat-women.component.css']
})
export class CatWomenComponent implements OnInit {
  womenCat =[];
  All;

  constructor(private gotdata : FetchService , private route : Router) { }

  ngOnInit(): void {
    this.gotdata.Getproduct().subscribe((data)=>{
      this.All = data;
      console.log(this.All);
      for(let item of this.All){
        if(item.category === "women's clothing"){
          this.womenCat.push(item);
        }
      }
      console.log(this.womenCat);
      //console.log(this.womenCat);
      
    })
  }
  ngAfterViewInit(){
    
  }
  showData(id){
    this.route.navigate([`Details/${id}`]);

  }

}
