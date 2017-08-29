import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinjau-kak',
  templateUrl: './tinjau-kak.component.html',
  styles: []
})
export class TinjauKakComponent implements OnInit {   katakunci:any;   showSpinner:any;
  data:any;
  constructor() {
    this.data="";
   }

  cari(){};   ngOnInit() {
  }

}
