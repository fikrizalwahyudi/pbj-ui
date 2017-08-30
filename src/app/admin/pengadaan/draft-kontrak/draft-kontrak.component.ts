import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft-kontrak',
  templateUrl: './draft-kontrak.component.html',
  styles: []
})
export class DraftKontrakComponent implements OnInit {

  katakunci: any; showSpinner: any;
  data: any;

  constructor() {
    this.data = {};
  }

  onSubmit() {
    alert('Masih Dalam Proses Pengembangan');
  };

  cari() { };

  ngOnInit() {

  }

}
