import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ang Form';
  signupForm: FormGroup;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', [Validators.required, Validators.maxLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', Validators.required]
    })
  }
  ngOnInit() {

  }

  postData() {
    this.firstName = this.signupForm.get('fname').value;
    this.lastName = this.signupForm.get('lname').value;
    console.log(this.signupForm.value)
  }

  resetForm() {
    this.signupForm.reset({
      fname: "Ahmad",
      email: 'xyz@gmail.com'
    })
  }

  /*fillData() {
    this.signupForm.setValue({
      "fname": "Ahmad",
      "lname": "Mr",
      "email": "aa@gg.com",
      "pwd": "xxx"
    })
  } */
  fillData() {
    this.signupForm.patchValue({
      "fname": "Ahmad",
      "email": "aa@gg.com",
      "pwd": "xxx"
    })
  }
}
