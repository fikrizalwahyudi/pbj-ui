import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pengadaan-form',
  templateUrl: './pengadaan-form.component.html',
  styleUrls: ['./pengadaan-form.component.css']
})
export class PengadaanFormComponent implements OnInit {   katakunci:any;   showSpinner:any;
  data:any;
  constructor(private router:Router) { 
    this.data={};
  }

  cari(){};  onSubmit(){};   ngOnInit() { 
    $("#menu-penangging").addClass("active");
    $("#menu-pengadaan").addClass("active");
  }

  ngOnDestroy() {
      $("#menu-penangging").removeClass("active");
      $("#menu-pengadaan").removeClass("active");
  }
  keList(){
    this.router.navigateByUrl('admin/dashboard')
  }
  
  keKak(){
    this.router.navigateByUrl('admin/kakForm')
  }

}
