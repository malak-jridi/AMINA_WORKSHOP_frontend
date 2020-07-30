import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.initForm()
  }
  initForm(){
    this.loginForm = new FormGroup({
      username: new FormControl('', [ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [ Validators.required, Validators.minLength(5)])
    })
  }
  login(){
    if( this.loginForm.valid ){
      this.authService.login( this.loginForm.value.username, this.loginForm.value.password )
      .subscribe(
        result=> {
          console.log(result)
          this.router.navigateByUrl('navbarTest')
        },
        err => console.log(err)
      )
    }
  }


}
