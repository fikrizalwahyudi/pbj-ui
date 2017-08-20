import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pengadaan-form',
  templateUrl: './pengadaan-form.component.html',
  styleUrls: ['./pengadaan-form.component.css']
})
export class PengadaanFormComponent implements OnInit {
  data={};
  constructor(private router:Router) { }

  ngOnInit() {
  }

  keList(){
    this.router.navigateByUrl('admin/dashboard')
  }
  
  keKak(){
    this.router.navigateByUrl('admin/kakForm')
  }

}
