import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    username:['', Validators.required],
    name:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    confirmPassword:['', Validators.required],
  });

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.dataService.register(this.registerForm.value)
    .subscribe((data)=>{
      alert("registration successful")
    }, err=>{
      alert(err.error.message)
    })
  }
  getError(control){
    return this.registerForm.get(control).errors;
  }
}
