import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pengguna-form',
  templateUrl: './pengguna-form.component.html',
  styleUrls: ['./pengguna-form.component.css']
})
export class PenggunaFormComponent implements OnInit {   katakunci:any;   showSpinner:any;
  data:any;
  constructor(private router:Router) { }

  cari(){};   ngOnInit() { 
    $("#menu-master").addClass("active");
    $("#menu-pengguna").addClass("active");
  }

  ngOnDestroy() {
      $("#menu-master").removeClass("active");
      $("#menu-pengguna").removeClass("active");
  }

  onSubmit(){
    this.router.navigateByUrl('admin/pengguna')
  }
  
  keList(){
    this.router.navigateByUrl('admin/pengguna')
  }

}
