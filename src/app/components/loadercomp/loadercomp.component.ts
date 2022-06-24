import { Component, OnInit } from '@angular/core';
import { LoaderservService } from '../loaderserv.service';

@Component({
  selector: 'app-loadercomp',
  templateUrl: './loadercomp.component.html',
  styleUrls: ['./loadercomp.component.css']
})
export class LoadercompComponent implements OnInit {
  isloading;

  constructor(private loader : LoaderservService) { }

  ngOnInit(): void {
    this.isloading=this.loader.getIsloading();
  }

}
