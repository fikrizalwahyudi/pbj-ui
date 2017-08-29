import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinjau-teknis',
  templateUrl: './tinjau-teknis.component.html',
  styles: []
})
export class TinjauTeknisComponent implements OnInit {   katakunci:any;   showSpinner:any;
  data:any;
  constructor() { 
    this.data={};
  }

  cari(){};  onSubmit(){};   ngOnInit() {
  }

  ngOnDestroy() {
 
    
  }
}
