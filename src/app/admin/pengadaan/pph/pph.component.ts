import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pph',
  templateUrl: './pph.component.html',
  styles: []
})
export class PphComponent implements OnInit {
  data:any;
  constructor() { 
    this.data=[]
  }

  ngOnInit() {
  }
  
  onSubmit(){
    alert('Masih Dalam Proses Pengembangan');
  }

}
