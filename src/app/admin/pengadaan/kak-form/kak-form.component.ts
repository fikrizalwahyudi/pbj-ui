import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kak-form',
  templateUrl: './kak-form.component.html',
  styleUrls: ['./kak-form.component.css']
})
export class KakFormComponent implements OnInit {   katakunci:any;   showSpinner:any;
  data:any;
  constructor(private router:Router) {
    this.data='';
  }

  cari(){
    
  };  
  
  ngOnInit() {

  }

  onSubmit(){
    this.router.navigateByUrl('admin/pengadaanForm')
  }

}
