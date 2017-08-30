import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teknis',
  templateUrl: './teknis.component.html',
  styles: []
})
export class TeknisComponent implements OnInit {   katakunci:any;   showSpinner:any;
  data:any;
  constructor() { 
    this.data={};
  }

  cari(){};  onSubmit(){alert('Masih Dalam Proses Pengembangan');};   ngOnInit() {
  }

}
