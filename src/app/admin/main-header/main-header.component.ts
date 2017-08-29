import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Cookie } from 'ng2-cookies';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'admin-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {   katakunci:any;   showSpinner:any;

  constructor(
    private router:Router
  ) {}

  cari(){};  onSubmit(){};   ngOnInit() {
  }

  gotoLogin(){
    this.router.navigate(['/login']);
  }

  logOut(){
    let txtMsgWarning = "";
     swal({
                title: "Apakah anda yakin keluar dari aplikasi?",
                text: txtMsgWarning,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#00a65a",
                confirmButtonText: "Ya",
                cancelButtonText: "Tidak",
                cancelButtonColor:"#dd4b39"
        }).then(
            () => { 
//                  console.log(Cookie.check('access_token'));
//                  console.log(Cookie.get('access_token'));
                  Cookie.delete('access_token');
                  this.router.navigateByUrl('/admin');        
            },
            (dismiss) => { 

            }
        );
  }

}
