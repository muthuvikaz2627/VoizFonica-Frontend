import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { user } from '../user';
import { FormBuilder } from '@angular/forms';
import { groupBy } from 'rxjs';


@Component({



  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']



})

export class RegisterComponent implements OnInit {
  user: user = new user();
 
  profileForm:any;

  constructor(private loginService: LoginService, private http: HttpClient,private formBuilder:FormBuilder) {
    this.profileForm = this.formBuilder.group({
      Firstname: new FormControl('', [Validators.required]),
      Lastname: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      Repeatpassword: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      Phonenumber: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
      Pincode: new FormControl('', [Validators.required]),
      Aadharnumber: new FormControl('', [Validators.required])

    });
   }



  get f() {
    return this.profileForm.controls
  }
  get Firstname(){
    return this.profileForm.get('Firstname');
  }
  get Lastname(){
    return this.profileForm.get('Lastname');
  }
  get Email(){
    return this.profileForm.get('Email');
  }
  get City(){
    return this.profileForm.get('City');
  }
  get Pincode(){
    return this.profileForm.get('Pincode');
  }
 
  reg() {
    this.user.firstname = this.f['Firstname'].value;
    this.user.lastname = this.f['Lastname'].value;
    this.user.password = this.f['Password'].value;
    this.user.repeatpassword = this.f['Repeatpassword'].value;
    this.user.age = this.f['age'].value;
    this.user.number = this.f['Phonenumber'].value;
    this.user.email = this.f['Email'].value;
    this.user.city = this.f['City'].value;
    this.user.pincode = this.f['Pincode'].value;
    this.user.aadharnumber = this.f['Aadharnumber'].value;

    alert("Successfully registered");



    this.postdata();
  }

  postdata() {
 
    this.loginService.createRegistration(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new user();

  }
  ngOnInit(): void {
  }

}