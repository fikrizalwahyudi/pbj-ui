import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pphp',
  templateUrl: './pphp.component.html',
  styles: []
})
export class PphpComponent implements OnInit {
  data:any;
  constructor() { 
    this.data=[]
  }


  ngOnInit() {
  }

  onSubmit(){
    alert('Masih Dalam Proses Pengembangan');
  }

  onchange(){
    
  }

}
