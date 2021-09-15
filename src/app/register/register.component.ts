import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registerForm:any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "employeefirstname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "employeelastname":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "employeeaddress":new FormControl(null,[Validators.required]),
      "employeephonenumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "employeedob":new FormControl(null,[Validators.required]),
      "employeeEmail":new FormControl(null,[Validators.required,Validators.email])
    });
  }

  submitData() {
    console.log(this.registerForm.value);

    if(this.registerForm.valid)
    {
      alert(`Thank You ${this.registerForm.value.employeefirstname} you will soon be able to access employ benefits`)
    }
  }

  get employeefirstname() { return this.registerForm.get('employeefirstname'); }
  get employeelastname() { return this.registerForm.get('employeelastname'); }
  get employeeEmail() { return this.registerForm.get('employeeEmail'); }
  get employeephonenumber() { return this.registerForm.get('employeephonenumber'); }
  get employeedob() { return this.registerForm.get('employeedob'); }
  get employeeaddress() { return this.registerForm.get('employeeaddress'); }
}
