import { Component, OnDestroy, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';


import { LoginService } from '../login.service';

import { user } from '../user';


@Component({

  selector: 'app-pay',

  templateUrl: './pay.component.html',

  styleUrls: ['./pay.component.css']

})

export class PaymentComponent implements OnInit, OnDestroy {

  user: user = new user();

  users: any;
  mystatus: any;

  mithresh: any;
  deleteMessage: any;
  logger: any;
  data: any;
  success: any;

  constructor(private loginService: LoginService) {
    const userUrl1='http://localhost:8887/api/payment';
   }
  ngOnInit(): void {
    this.mystatus = 'ok';
  }
  ngOnDestroy(): void {
    console.log("I am destroyer");
  }

  profileForm = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phno: new FormControl('', [Validators.required, Validators.minLength(6)]),
    accno: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cvv: new FormControl('', [Validators.required, Validators.minLength(6)])

  });
  // Here we will develope the logic initialis the variable which are comming from forms
  get f() {
    return this.profileForm.controls;
  }

  get name(): any {
    return this.profileForm.get('name');
  }

  get email(): any {
    return this.profileForm.get('email');
  }

  get phno(): any {
    return this.profileForm.get('phno');
  }
  get accno(): any {
    return this.profileForm.get('accno');
  }
  get cvv(): any {
    return this.profileForm.get('cvv');
  }

  send() {

    console.log(this.profileForm.value)


    //Here logic will be there Develop your application can add logic here to call API Hit
    //here we are gong to creae the object of the user entity, them will call the API hit for the post operation
    this.user.name = this.f['name'].value;
    this.user.email = this.f['email'].value;
    this.user.phno = this.f['phno'].value;
    this.user.accno = this.f['accno'].value;
    this.user.cvv = this.f['cvv'].value;


    //we are going to call the post operation
    this.postuser()

    //this.getUserListData()
  }

  //  deleteUser(id: number) {
  //   this.ngOnDestroy();
  //     this.loginService.deleteUser(id)

  //       .subscribe(

  //         data => {

  //           console.log(data);

  //           this.deleteMessage=true;

  //           this.loginService.getUserList().subscribe(data =>{

  //             this.users =data

  //             })

  //         },

  //         error => console.log(error));

  //   }

  postuser() {                                   //Calls the REST API throgh the services

    this.loginService.createPayment(this.user)

      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));

    this.user = new user();
    this.success = "Paid Successfully"
  }

  getAllPayment() {

    //here we are going to call the API fro the get users
    this.loginService.getPaymentList().subscribe((data: any) => {
      console.log("Hii all");
      this.users = data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file
    })



    getPaymentListData(this.any)


    this.loginService.getPaymentList().subscribe((data: any) => {





      this.users = data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file.



      console.log(this.users);



      // this.dtTrigger.next();





    })



  }
  any(any: any) {
    throw new Error('Method not implemented.');
  }

}

function getPaymentListData(any: (any: any) => void) {
  throw new Error('Function not implemented.');
}





