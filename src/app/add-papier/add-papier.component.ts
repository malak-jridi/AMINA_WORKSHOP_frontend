import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PapierService } from '../../app/papier.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-papier',
  templateUrl: './add-papier.component.html',
  styleUrls: ['./add-papier.component.css']
})
export class AddPapierComponent implements OnInit {
  public papierForm: FormGroup;
  constructor( private router: Router,
               private papierService: PapierService ) { }


  ngOnInit() {
    this.initForm();
  }

  // Reactive papier form
  initForm() {
    this.papierForm = new FormGroup({
      titre: new FormControl ('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl ('',Validators.required),
      file: new FormControl ('', Validators.required)
    })
  }

  sendPapier(){
    debugger
    if( !this.papierForm.valid ){
      this.papierService.addPapier({ titre: this.papierForm.value.titre,
                                      description: this.papierForm.value.description,
                                      file: this.papierForm.value.file,
                                      etat: false,
                                      created_at: Date.now,
                                      updated_at: Date.now,
                                      user_id: 13
                                  })
                        .subscribe(
                          result => {
                            this.router.navigate(['add-papier'])
                          },
                          err => console.log(err)
                        )
    }
  }

  ResetForm() {
    this.papierForm.reset();
  }

  submitStudentData() {
    //this//.crudApi.AddStudent(this.studentForm.value);
    //this.toastr.success(this.studentForm.controls['firstName'].value + ' successfully added!');
    this.ResetForm();
  };


}
