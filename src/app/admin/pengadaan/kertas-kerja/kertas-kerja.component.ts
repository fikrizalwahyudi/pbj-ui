import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kertas-kerja',
  templateUrl: './kertas-kerja.component.html',
  styles: []
})
export class KertasKerjaComponent implements OnInit {   katakunci:any;   showSpinner:any;
  data:any;
  constructor() { 
    this.data={};
  }

  cari(){};  onSubmit(){};   ngOnInit() {
  }

}
