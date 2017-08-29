import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {   katakunci:any;   showSpinner:any;
  bodyClasses:string = "skin-blue sidebar-mini";
  body = document.getElementsByTagName('body')[0];
  
  constructor() { }

  cari(){};  onSubmit(){};   ngOnInit() {
    //add the the body classes
    this.body.classList.add("skin-blue");
    this.body.classList.add("sidebar-mini");
  }

   ngOnDestroy() {
    //remove the the body classes
    this.body.classList.remove("skin-blue");
    this.body.classList.remove("sidebar-mini");
  }

}
