import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getUrl } from '../../../share/global';
import { Http } from '@angular/http';
import { CrudService } from '../../../library/_services/crud.service';

@Component({
  selector: 'app-penyedia',
  templateUrl: './penyedia.component.html',
  styleUrls: ['./penyedia.component.css']
})

export class PenyediaComponent implements OnInit {
  data=[{'id':'1','namaPerusahaan':'Stark Corp','contactPerson':'Brandon Stark','email':'bran@stark.com'},
  {'id':'2','namaPerusahaan':'Lanister Corp','contactPerson':'Jamie Laniester','email':'jamie@laniester.com'}
  ]

  constructor(private router:Router) { }

  ngOnInit() { 
    $("#menu-master").addClass("active");
    $("#menu-penyedia").addClass("active");
  }

  ngOnDestroy() {
    $("#menu-master").removeClass("active");
    $("#menu-penyedia").removeClass("active");
  }

  tambah(){
    this.router.navigateByUrl('admin/penyediaForm');
  }
}
