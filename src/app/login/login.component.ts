import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isAuthenticated!: boolean;
  submitted = false;
  loginForm = new FormGroup({
     UserName : new FormControl(),
     Password :new FormControl()
  })
  ;
  username!: string;
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.isAuthenticated = true;
      this.username = 'Administrator';
    } else {
      this.isAuthenticated = false;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
