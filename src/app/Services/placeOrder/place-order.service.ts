import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'https://talabat-iti.herokuapp.com/api/orders/add-orders';
const API_URL2 = 'https://talabat-iti.herokuapp.com/api/orders/get-order-status';

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
export class PlaceOrderService {

  constructor(private http: HttpClient) {}

  orderGetStatus(id:any): Observable<any> {
    console.log(id);
      return this.http.get(
        `${API_URL2}/${id}`,
        httpOptions
        );

  }






  placeOrder(product_details: {}[], restaurant_name:any, request : any, delivery_fee : any, payment_type:any): Observable<any> {

    return this.http.post(
      `${API_URL}`,
    {
      product_details : product_details,
      restaurant_name: restaurant_name,
      request:request,
      delivery_fee:delivery_fee,
      payment_type:payment_type
    },
      httpOptions
    );
  }


}
