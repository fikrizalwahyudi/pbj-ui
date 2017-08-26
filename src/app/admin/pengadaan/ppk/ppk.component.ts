import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ppk',
  templateUrl: './ppk.component.html',
  styles: []
})
export class PpkComponent implements OnInit {
  data={'noIdPengadaan':'11231','requestor':1,'kepada':1,'nomor':'112233','tgl':'04/02/2017','sifat':'1','perihal':'KAA','program':'percobaan 1','kegiatan':'giat2'};
  constructor(private router:Router) { }

  ngOnInit() {
  }

}

