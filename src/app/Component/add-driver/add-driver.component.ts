import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})


export class  AddDriverComponent implements OnInit {
  data: any = {};

  form: any = {
    email: null,
    name: null,
    mobile:null,
    Password: null,
    confirmPassword: null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn = true;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, name, mobile, password, confirmPassword } = this.form;
/*
    this.authService
    .register(email, name, mobile, password, confirmPassword)
    .subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (e) => {
        console.log(e);
        this.errorMessage = e.error.message;
        this.isSignUpFailed = true;
      },
      complete: () => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.isLoggedIn = false;
      },
    });
  */ 
  }


}







