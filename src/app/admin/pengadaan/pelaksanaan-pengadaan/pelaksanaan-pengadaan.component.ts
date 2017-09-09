import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelaksanaan-pengadaan',
  templateUrl: './pelaksanaan-pengadaan.component.html',
  styles: []
})
export class PelaksanaanPengadaanComponent implements OnInit {
  data: any;
  constructor() {
    this.data = {};
  }

  ngOnInit() {
  }

  onSubmit(){
    alert('Masih Dalam Proses Pengembangan');
  }

  onChange(id){
    alert('Masih Dalam Proses Pengembangan');  
  }

}
