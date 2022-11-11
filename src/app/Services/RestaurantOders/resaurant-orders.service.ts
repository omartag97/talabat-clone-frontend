import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'https://talabat-iti.herokuapp.com/api/restaurants/get-pended-orders';
const API_URL3 = 'https://talabat-iti.herokuapp.com/api/restaurants/get-accepted-orders';
const API_URL2 = 'https://talabat-iti.herokuapp.com/api/orders/set-order-status';


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
export class ResaurantOrdersService {

  constructor(private http: HttpClient) { }


  getRestOrders(): Observable<any> {

      return this.http.get(
        `${API_URL}`,
        httpOptions
        );
  }


  getPrevOrders(): Observable<any> {

    return this.http.get(
      `${API_URL3}`,
      httpOptions
      );
}

  setStatus(status:string,id:any): Observable<any> {
    console.log(status)
    return this.http.post(
      `${API_URL2}/${id}`,
    {
      'status':status
    },
      httpOptions
    );
  }


}
