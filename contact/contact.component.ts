import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



import { LoginService } from '../login.service';

import { user } from '../user';


@Component({

  selector: 'app-contact',

  templateUrl: './contact.component.html',

  styleUrls: ['./contact.component.css']

})

export class ContactComponent implements OnInit,OnDestroy {

  user: user = new user();

  users: any;
  mystatus:any;
  success:any
  mithresh:any;
  deleteMessage: any;
  logger: any;
  data: any;
  flag: any;
 

  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
    this.mystatus='ok';
    this.flag=true;
    sessionStorage.setItem('mith','2');
    console.log("contact component 1",sessionStorage.getItem('mith'));
  }
  ngOnDestroy(): void {
    console.log("I am destroyer");
  }

  profileForm = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    message: new FormControl('',[Validators.required, Validators.minLength(6)])

  });
   // Here we will develope the logic initialis the variable which are comming from forms
   get f(){
     return this.profileForm.controls;
   }

   get name():any{
    return this.profileForm.get('name');
  }

  get email():any{
    return this.profileForm.get('email');
  }

  get message():any{
    return this.profileForm.get('message');
  }

  send() {

    console.log(this.profileForm.value)


    //Here logic will be there Develop your application can add logic here to call API Hit
    //here we are gong to creae the object of the user entity, them will call the API hit for the post operation
    this.user.name=this.f['name'].value;
    this.user.email=this.f['email'].value;
    this.user.message=this.f['message'].value;

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

  this.loginService.createContact(this.user)

    .subscribe((data: any) => console.log(data), (error: any) => console.log(error));

  this.user = new user();
  this.success="Submitted Successfully"
}

getAllContact(){

  //here we are going to call the API fro the get users
 this.loginService.getContactList().subscribe((data: any) => {
console.log ("Hii all");
  this.users = data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file
})



getContactListData(this.any)


  this.loginService.getContactList().subscribe((data: any) => {





    this.users = data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file.



    console.log(this.users);



    // this.dtTrigger.next();





  })



}
  any(any: any) {
    throw new Error('Method not implemented.');
  }

}


function getContactListData(any: any) {
  throw new Error('Function not implemented.');
}


