import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pegawai-form',
  templateUrl: './pegawai-form.component.html',
  styleUrls: ['./pegawai-form.component.css']
})
export class PegawaiFormComponent implements OnInit {   katakunci:any;   showSpinner:any;
  data:any;
  constructor(private router:Router) { this.data={}; }

  cari(){

  };
  
  ngOnInit() { 
    $("#menu-master").addClass("active");
    $("#menu-pegawai").addClass("active");
  }

  ngOnDestroy() {
      $("#menu-master").removeClass("active");
      $("#menu-pegawai").removeClass("active");
  }

  onSubmit(){
    this.router.navigateByUrl('admin/pegawai')
  }
  keList(){
    this.router.navigateByUrl('admin/pegawai')
  }

}
