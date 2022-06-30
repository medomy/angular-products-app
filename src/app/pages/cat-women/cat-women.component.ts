import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchService } from 'src/app/services/fetch/fetch.service';
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
