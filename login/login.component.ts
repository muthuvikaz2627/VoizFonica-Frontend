import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';



import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registeration.service';




import { user } from '../user';




@Component({



  selector: 'app-login',



  templateUrl: './login.component.html',



  styleUrls: ['./login.component.css']



})



export class LoginComponent implements OnInit {



  user: user = new user();



  users: any;

  mystatus:any;



  number=102;



  mithresh:any;

  deleteMessage: any;

  logger: any;



  formdata={email:"",password:""}

 


 
  submit=false;
 


  constructor(private  router:Router, private http:HttpClient, private registrationService:RegistrationService) { }

 


  profileForm = new FormGroup({



    email: new FormControl('', [Validators.required, Validators.minLength(5)]),

    password: new FormControl('', [Validators.required, Validators.minLength(6)]),



  });

   // Here we will develope the logic initialis the variable which are comming from forms

   get f(){

     return this.profileForm.controls;

   }


  ngOnInit(): void {

    //this.mystatus="ok";



  }


  login(){
    console.log("login works")
    this.http.get<any>("http://localhost:8999/reg/getregistration").subscribe(res=>{
      const use=res.find((a:any)=>{
        console.log(this.profileForm.value.email)
        return a.email === this.profileForm.value.email && a.password===this.profileForm.value.password

      });
     

      if(use)
      {
        console.log("if works");
       
        this.profileForm.reset();
        this.router.navigate(['/home']);

      }
    else{
      alert("User not found");

    }}
      )









   



}}