import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getUrl } from '../../../share/global';
import { Http } from '@angular/http';
import { CrudService } from '../../../library/_services/crud.service';

@Component({
  selector: 'app-pengguna',
  templateUrl: './pengguna.component.html',
  styleUrls: ['./pengguna.component.css']
})

export class PenggunaComponent implements OnInit {
  data=[{'id':'1','nama':'Jon Snow','username':'Jon','role':'admin','status':1},
  {'id':'2','nama':'Jon Snow','username':'Jon','role':'admin','status':1},
]

  constructor(private router:Router) { }

  ngOnInit() { 
    $("#menu-master").addClass("active");
    $("#menu-pengguna").addClass("active");
  }

  ngOnDestroy() {
    $("#menu-master").removeClass("active");
    $("#menu-pengguna").removeClass("active");
  }

  tambah(){
    this.router.navigateByUrl('admin/penggunaForm');
  }

}
