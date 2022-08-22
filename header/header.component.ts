import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag=false;

  constructor() { }

  ngOnInit(): void {
    console.log("MIthresh",(sessionStorage.getItem('mith')));
    console.log("header component 1",sessionStorage.getItem('mith'));

    
    if(sessionStorage.getItem('mith')==='1'){
      console.log("header component true block",sessionStorage.getItem('mith'));
      console.log("MIthresh",(sessionStorage.getItem('mith')));
      this.flag= true;
  
    }else{
  
      this.flag=false;
      console.log("header component false block",sessionStorage.getItem('mith'));
  
    } //when form is getting submitted we need to make log in button is not visible
  }

 
}
