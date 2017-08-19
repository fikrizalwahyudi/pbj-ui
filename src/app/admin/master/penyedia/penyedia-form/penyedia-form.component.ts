import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-penyedia-form',
  templateUrl: './penyedia-form.component.html',
  styleUrls: ['./penyedia-form.component.css']
})
export class PenyediaFormComponent implements OnInit {
  data=[];
  constructor(private router:Router) { }

  ngOnInit() { 
    $("#menu-master").addClass("active");
    $("#menu-penyedia").addClass("active");
  }

  ngOnDestroy() {
      $("#menu-master").removeClass("active");
      $("#menu-penyedia").removeClass("active");
  }

  onSubmit(){
    this.router.navigateByUrl('admin/penyedia')
  }
  
  keList(){
    this.router.navigateByUrl('admin/penyedia')
  }

}
