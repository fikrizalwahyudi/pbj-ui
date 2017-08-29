import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {   katakunci:any;   showSpinner:any;
  data={'id':'1','namaLengkap':'Jon Snow','golongan':1,'jabatan':1,'jk':'0','noInduk':'12345678','noTelp':12311111,'email':'jhon@mail.com','alamat':'jln bastila 2'};
  constructor() { }

  cari(){}; 

  ngOnInit() {
  }

  onSubmit(){

  }

}
