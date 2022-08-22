import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChildren } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

import { user } from '../user';


@Component({

  selector: 'app-forgotpass',

  templateUrl: './forgotpass.component.html',

  styleUrls: ['./forgotpass.component.css']

})

export class ForgotPassComponent implements OnInit {

  user: user = new user();
  to: any;
  OTP: any;


  constructor(private loginService: LoginService,private http:HttpClient, private router:Router) {
   }

  profileForm = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    otp: new FormControl('', [Validators.required, Validators.minLength(4)]),

  });
  // Here we will develope the logic initialis the variable which are comming from forms
  get f() {
    return this.profileForm.controls;
  }

  // get username(): any {
  //   return this.profileForm.get('username');
  // }
  // get password(): any {
  //   return this.profileForm.get('password');
  // }

  submit() {

    console.log(this.profileForm.value)


    //Here logic will be there Develop your application can add logic here to call API Hit
    //here we are gong to creae the object of the user entity, them will call the API hit for the post operation
    this.user.email = this.f['email'].value;
    this.user.password = this.f['password'].value;
    this.user.confirmpassword = this.f['confirmpassword'].value;

    //we are going to call the post operation
    this.postuser()

    //this.getUserListData()
  }

  
  postuser() {                                   //Calls the REST API throgh the services

    this.loginService.createRegistration(this.user)

      .subscribe(data => console.log(data), error => console.log(error));

    this.user = new user();

  }


  
  ngOnInit(): void {

  }
  //this is for email generation
  sendotp() {
    this.http.get<any>("http://localhost:9009/reg/getregistration").subscribe(res=>{

      const mob = res.find((a:any)=>{if(a.email === this.profileForm.value.email){this.to=a.email}

        return a.email === this.profileForm.value.email

      });

      if(mob)

      {

        this.random2();

      }

      else{
        alert("OTP not generated")

      }

    },err=>{

      alert("something went wrong")

   

    })
  }

  mail(){

    this.loginService.SendMail(this.to,this.OTP)

      .subscribe(data => console.log(data), error => console.log(error));

    this.user = new user();

  }




  randomIntFromInterval2() {

    return Math.floor(Math.random() * (9999 -  + 1000) + 1000)

  }



  random2(){

  const rndInt = this.randomIntFromInterval2()

  console.log(rndInt)

  this.OTP=rndInt;
  this.mail();



  }



}
  

