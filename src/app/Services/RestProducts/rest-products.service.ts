import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'https://talabat-iti.herokuapp.com/api/restaurants/get-products';
const API_URL2 = 'https://talabat-iti.herokuapp.com/api/products/get-product';
const API_URL3 = 'https://talabat-iti.herokuapp.com/api/products/update-product';
const API_URL4 = 'https://talabat-iti.herokuapp.com/api/products/delete-product';
const API_URL5 = 'https://talabat-iti.herokuapp.com/api/products/add-product';

const TOKEN_KEY = 'auth-rest-token';

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
export class RestProductsService {

  constructor(private http: HttpClient) { }
  getRestProducts(): Observable<any> {

    return this.http.get(
      `${API_URL}`,
      httpOptions
      );
}

postProduct( name:any, price:any, image:FormData): Observable<any> {
  return this.http.post(
    `${API_URL5}`,
    {
      name,
      price,
      image:image

    },
    httpOptions
    );
}


getProduct(id:any): Observable<any> {
  return this.http.get(
    `${API_URL2}/${id}`,
    httpOptions
    );
}

editProduct(id:any, name:any, price:any): Observable<any> {
  return this.http.patch(
    `${API_URL3}/${id}`,
    {
      name:name,
      price:price


    },
    httpOptions
    );
  }

  deletProduct(id:any): Observable<any> {
      return this.http.delete(
        `${API_URL4}/${id}`,
          httpOptions
        );
}


}
