import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laporan-status-pengadaan',
  templateUrl: './laporan-status-pengadaan.component.html',
  styles: []
})
export class LaporanStatusPengadaanComponent implements OnInit {
  data:any;
  katakunci:any;
  showSpinner:any;
  constructor() {
    this.data=[{'id':'1','judul':'Pengadaan Applikasi','requestor':'Jon','tgl':'01/02/2017','sifat':'B','status':'Pending Approval'},
    {'id':'2','judul':'Penyewaan Gudang','requestor':'Jon','tgl':'05/02/2017','sifat':'A','status':'Pending Approval'},
    {'id':'3','judul':'Pembelian ATK','requestor':'Jon','tgl':'02/05/2017','sifat':'B','status':'Pending Approval'},
    ]
   }

  ngOnInit() {
  }

  onSubmit(){
    alert('Masih Dalam Proses Pengembangan');
  }

  cari(){

  }

  onchange(){
    
  }

}
