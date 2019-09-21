import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Template Driven Form';
  user = new User();
 

  constructor() { }
  OnFormSubmit(form:NgForm){
    if(form.invalid){
      return
    }
    console.log('user name ' + form.controls['uname'].value);
    console.log('gender ' + form.controls['gender'].value);
    console.log('married ' + form.controls['married'].value);
    console.log('tc ' + form.controls['tc'].value);
  }
  resetForm(form:NgForm){
    this.user = new User();
    form.resetForm({
      married:false
    })
  }
  setDefaultValue(){
    this.user.username = 'Mumtaz';
    this.user.gender = 'male';
    this.user.isMarried = false;
    this.user.isTCAccepted = true;
  }
  ngOnInit() { 
 
  }

}
