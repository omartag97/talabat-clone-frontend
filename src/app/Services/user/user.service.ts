import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'https://talabat-iti.herokuapp.com/api/users';

const AUTH_API= 'https://talabat-iti.herokuapp.com/api/users/update-user'
const AUTH_API2= 'https://talabat-iti.herokuapp.com/api/users/get-user-data'

const TOKEN_KEY = 'auth-token';

const token: any = window.sessionStorage.getItem(TOKEN_KEY);
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  updateUser(name: string, email: string, password: string,new_password:any, confirm_password: string, mobile:any ): Observable<any> {
    return this.http.post(
      `${AUTH_API}`,
    {
      name,
      email,
      password,
      new_password,
      confirm_password,
      mobile
    },
      httpOptions
    );
  }

  getUserDetails():Observable<any> {
    return this.http.get(`${AUTH_API2}`, httpOptions);
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getDetails(): Observable<any> {
    return this.http.get(`${API_URL}/user-address`, httpOptions);
  }
}
