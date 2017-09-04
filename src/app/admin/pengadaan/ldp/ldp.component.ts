import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ldp',
  templateUrl: './ldp.component.html',
  styles: []
})
export class LdpComponent implements OnInit {
  data:any;
  constructor() {
    this.data={};
  }

  ngOnInit() {
  }

  onSubmit(){
    alert('Masih Dalam Proses Pengembangan');
  }

}
