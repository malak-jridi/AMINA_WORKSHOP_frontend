import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private authService: AuthService ) { }

  ngOnInit() {
    this.initForm()
  }
  initForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [ Validators.required, Validators.minLength(8)])
    })
  }
  login(){
    if( this.loginForm.valid ){
      this.authService.login( this.loginForm.value ).subscribe( result=>{
        if(result.success){
          console.log(result)
          alert(result.message)
        }
        else
          alert(result.message)
      })
    }
  }

}
