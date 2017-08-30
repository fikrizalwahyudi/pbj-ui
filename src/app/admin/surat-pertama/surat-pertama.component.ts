import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surat-pertama',
  templateUrl: './surat-pertama.component.html',
  styleUrls: ['./surat-pertama.component.css']
})
export class SuratPertamaComponent implements OnInit {   katakunci:any;   showSpinner:any;

  constructor() { }

  cari(){};  onSubmit(){alert('Masih Dalam Proses Pengembangan');};   ngOnInit() {
  }

}
