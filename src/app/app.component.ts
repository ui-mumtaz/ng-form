import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ang Form';
  signupForm: FormGroup;
  firstName:string="";
  lastName:string="";
  email:string="";
  password: string="";

  constructor(private formBuilder:FormBuilder){
    this.signupForm=formBuilder.group({
      fname: new FormControl(),
      lname:new FormControl(),
      email: new FormControl(),
      pwd: new FormControl()
    })
  }
  ngOnInit(){

  }

  postData(signupForm:any){
    this.firstName = signupForm.controls.fname.value;
    this.lastName = signupForm.controls.lname.value;
    this.email = signupForm.controls.email.value;
    this.password = signupForm.controls.pwd.value;
    console.log(this.firstName);
  }
}
