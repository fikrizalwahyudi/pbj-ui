import { Component, OnInit } from '@angular/core';
import { Http, JsonpModule, Jsonp, Response,Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as global from '../share/global'; 
import swal from 'sweetalert2';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { ApiService } from '../library/_services/api.service';

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {   katakunci:any;   showSpinner:any;
  
  bodyClasses:string = "login-page";
  body = document.getElementsByTagName('body')[0];
  icheck: JQuery;

  
  loginCredentials:any;
  cookies: Object;
  keys: Array<string>;
  cName: string;
  cValue: string;
  rName: string;
  checkName: string;

  username:string;
  password:string;

  constructor(
    private apiService:ApiService,
    private http: Http,
    private router:Router
  ){}

  setCredentials(data: any){
       if(data.status){
            this.addCookie('access_token',data.authInfo.accessToken);
            this.router.navigateByUrl('/admin');
       }else{
            swal({
                title: 'Oops!',
                text: data.message.toString(),
                timer: 2500,
                type:'error'
            }).then(
                function () {},
                // handling the promise rejection
                function (dismiss) {
                    if (dismiss === 'timer') {
                    }
                }           
            )
           console.log(data);
       }
  }

  addCookie(cName: string, cValue: string) {
        this.removeCookie(cName);
        console.log('Adding: ', cName, cValue);
        Cookie.set(cName, cValue,0.5);
        this.update();
  }

  update() {
        this.cookies = Cookie.getAll();
        this.keys = Object.keys(this.cookies);
  }

  removeCookie(rName: string) {
        console.log('Removing: ', rName);
        Cookie.delete(rName);
        this.update();
  }

  onSubmit(f: NgForm) {

    let param = new URLSearchParams();
    param.append('username', f.value.username);
    param.append('password', f.value.password);
    
    this.apiService.postWithParam( 'app/login', param.toString() ).subscribe(
      (data) => this.setCredentials(data)
    );
   
  }

  cari(){

  };
    
  ngOnInit() {
    //Add the login-page class to the body
    //$('body').addClass(this.bodyClasses);
    this.body.classList.add(this.bodyClasses);   //add the class   

    this.icheck = jQuery("input").iCheck({
      checkboxClass: "icheckbox_square-blue",
      radioClass: "iradio_square-blue",
      increaseArea: "20%" // optional
    });

  }

  ngOnDestroy() {
    //remove the login-page class to the body
    //$('body').removeClass(this.bodyClasses);
    this.body.classList.remove(this.bodyClasses);
  }

  ngAfterViewInit() {
  }

  gotoAdmin(){
    this.router.navigate(['/admin']);
  }

}
