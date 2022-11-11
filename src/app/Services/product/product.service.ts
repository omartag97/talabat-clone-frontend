import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const token: any = window.sessionStorage.getItem(TOKEN_KEY);
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }),
};

const AUTH_API = 'https://talabat-iti.herokuapp.com/api/products';


@Injectable({
  providedIn: 'root'
})



export class ProductService {

  constructor(private http: HttpClient) {

  }

  getProduct(id:any): Observable<any> {
    return this.http.get(
      `${AUTH_API}/get-product/${id}`,
      httpOptions
      );
  }

}
