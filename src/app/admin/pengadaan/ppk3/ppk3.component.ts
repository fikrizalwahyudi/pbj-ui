import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppk3',
  templateUrl: './ppk3.component.html',
  styles: []
})
export class Ppk3Component implements OnInit {
  data:any;
  constructor() {
    this.data={};
   }

  ngOnInit() {
  }
  onSubmit(){
    alert('Masih Dalam Proses Pengembangan');
  }

  onchange(){
    
  }

}
