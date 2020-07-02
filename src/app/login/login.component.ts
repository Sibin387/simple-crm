import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username:['', Validators.required],
    password:['', Validators.required],
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm);
  }
  getError(control){
    return this.loginForm.get(control).errors;
  }
}
