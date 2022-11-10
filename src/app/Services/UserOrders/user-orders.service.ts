import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'http://127.0.0.1:8000/api/users/get-orders';

const TOKEN_KEY = 'auth-token';
const token: any = window.sessionStorage.getItem(TOKEN_KEY);
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserOrdersService {
  constructor(private http: HttpClient) {

  }
  getOrders(): Observable<any> {
    return this.http.get(
      `${API_URL}`,
      httpOptions
      );
  }


}
