import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.registerForm = new FormGroup({
      firstName:        new FormControl('', [ Validators.required, Validators.minLength(3)]),
      lastName:         new FormControl('', [ Validators.required, Validators.minLength(3)]),
      dateOfBirth:      new FormControl( '', Validators.required ),
      sexe:             new FormControl( '', Validators.required ),
      username:         new FormControl('', [ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password:         new FormControl('', [ Validators.required, Validators.minLength(6)])
    })
  }
  register(){

    if( this.registerForm.valid ){
      this.authService.register({ date_naissance: this.registerForm.value.dateOfBirth.toDateString(),
                                  prenom: this.registerForm.value.firstName,
                                  nom: this.registerForm.value.lastName,
                                  password: this.registerForm.value.password,
                                  sexe: this.registerForm.value.sexe,
                                  username: this.registerForm.value.username
                                })
                      .subscribe(
                        result => {
                        this.router.navigate(['navbarTest'])
                      },
                      err => console.log(err)
                      )
    }

  }
}
