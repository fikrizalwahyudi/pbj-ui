import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teknis',
  templateUrl: './teknis.component.html',
  styles: []
})
export class TeknisComponent implements OnInit {   katakunci:any;   showSpinner:any;
  data=[];
  constructor() { 
    this.data;
  }

  cari(){};   ngOnInit() {
  }

}
