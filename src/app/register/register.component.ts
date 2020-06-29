import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [ Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [ Validators.required, Validators.minLength(3)]),
      dateOfBirth: new FormControl( '', Validators.required ),
      email: new FormControl('', [ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [ Validators.required, Validators.minLength(8)])
    })
  }
  register(){

  }
}
