import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-penerbitan-nota',
  templateUrl: './penerbitan-nota.component.html',
  styles: []
})
export class PenerbitanNotaComponent implements OnInit {
  katakunci: any; showSpinner: any;
  data: any;
  constructor() {
    this.data = {};
  }

  cari() {

  };

  onSubmit() {
    alert('Masih Dalam Proses Pengembangan');
  };

  ngOnInit() {
  }

}
