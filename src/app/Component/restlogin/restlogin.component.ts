import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRestServiceService } from 'src/app/Services/authRestService/auth-rest-service.service';
import { TokenStorageService } from '../../Services/token/token-storage.service';

@Component({
  selector: 'app-restlogin',
  templateUrl: './restlogin.component.html',
  styleUrls: ['./restlogin.component.css']
})


export class RestloginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthRestServiceService, private tokenStorage: TokenStorageService, private router: Router
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getRestToken()) {
      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.
      login(email, password).
      subscribe(
        data => {
          this.tokenStorage.saveRestToken(data.token);
          //   this.tokenStorage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
        //  this.reloadPage();
          //        this.roles = this.tokenStorage.getUser().roles;

        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
      complete: () => {
        this.router.navigate(['orders']);
        }
  }

  // reloadPage(): void {
  //   if (this.isLoggedIn) {
  //     this.router.navigate(['orders']);

  //   }
  // }
}
