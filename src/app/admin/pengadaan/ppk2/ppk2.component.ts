import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppk2',
  templateUrl: './ppk2.component.html',
  styles: []
})
export class Ppk2Component implements OnInit {
  data:any;
  constructor() { 
    this.data={};
  }

  ngOnInit() {
  }

  onSubmit(){
    alert('Masih Dalam Proses Pengembangan');
  }; 

}
