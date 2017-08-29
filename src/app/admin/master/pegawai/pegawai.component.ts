import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getUrl } from '../../../share/global';
import { Http } from '@angular/http';
import { CrudService } from '../../../library/_services/crud.service';

@Component({
  selector: 'app-pegawai',
  templateUrl: './pegawai.component.html',
  styleUrls: ['./pegawai.component.css']
})

export class PegawaiComponent implements OnInit {   katakunci:any;   showSpinner:any;
  data=[{'id':'1','nama':'Jon Snow','gol':'Gol I','jabatan':'Jabatan I','status':1},
    {'id':'2','nama':'Ed Stark','gol':'Gol II','jabatan':'Jabaran II','status':1},
  ]

  constructor(private router:Router) {}

  cari(){};   

  ngOnInit() { 
    $("#menu-master").addClass("active");
    $("#menu-pegawai").addClass("active");
  }

  ngOnDestroy() {
    $("#menu-master").removeClass("active");
    $("#menu-pegawai").removeClass("active");
  }

  tambah(){
    this.router.navigateByUrl('admin/pegawaiForm');
  }

}
