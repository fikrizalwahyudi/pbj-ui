import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'admin-dashboard1',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class Dashboard1Component implements OnInit {   
  katakunci:any;
  showSpinner:any;
  constructor(private router:Router) { }

  lineChart : morris.GridChart;
  areaChart : morris.GridChart;
  barChart: morris.GridChart;
  donutChart: morris.DonutChart;
  knob: JQuery;
  calendar: JQuery;
  data=[{'id':'1','judul':'Pengadaan Apl','requestor':'Kasubag A','tglPengajuan':'01/01/2017','sifat':'B','statusPengadaan':'Pending Approval KPA','akun':'135469'},{'id':'2','judul':'Pengadaan Meja','requestor':'Kasubag B','tglPengajuan':'01/01/2017','sifat':'A','statusPengadaan':'Approval KPA','akun':'1123512'},];
  // <td>{{data.id}}</td>
  // <td>{{data.judul}}</td>
  // <td>{{data.requestor}}</td>
  // <td>{{data.tglPengajuan}}</td>
  // <td>{{data.sifat}}</td>
  // <td>{{data.statusPengadaan}}</td>
  // <td>{{data.akun}}</td>
  
  ngAfterViewInit(){

  }
 

  moreinfo(){
     swal(
      'berhasil',
      'data tersimpan di sistem',
      'success'
    );
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  tambah(){
    this.router.navigateByUrl('admin/pengadaanForm')
  }

  cari(){

  }

  edit(id){
    this.alert();
  }

  hapus(id){
    this.alert();
  }

  alert() {
    alert('Masih Dalam Proses Pengembangan');
  }
}
