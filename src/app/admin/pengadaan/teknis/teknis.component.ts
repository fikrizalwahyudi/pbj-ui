import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teknis',
  templateUrl: './teknis.component.html',
  styles: []
})
export class TeknisComponent implements OnInit {
  data:any;
  constructor() { 
    this.data='';
  }

  ngOnInit() {
  }

}
