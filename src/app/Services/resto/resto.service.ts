import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://talabat-iti.herokuapp.com/api/restaurants';
const AUTH_API2 = 'https://talabat-iti.herokuapp.com/api/restaurants/get-restaurant';
const AUTH_API3 = 'https://talabat-iti.herokuapp.com/api/products/get-products';

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

export class RestoService {
  constructor(private http: HttpClient) {}

  saveResto(name: string, email: string, address: string, formData: FormData): Observable<any> {
    return this.http.post(
      `${AUTH_API}/saveResto`,
    {
      name,
      email,
      address,
      logo:formData
    },
      httpOptions
    );
  }

  getAll(): Observable<any> {
    return this.http.get(
      `${AUTH_API}/get-all-restaurants`
      );
  }

  getRest(id:any): Observable<any> {
    return this.http.get(
      `${AUTH_API}/rest-info/${id}`
      );
  }

  getMenu(id:any): Observable<any> {
    return this.http.get(
      `${AUTH_API3}/${id}`,
      httpOptions
      );
  }

    updateResto(name: string, email: string, address: string, formData: FormData): Observable<any> {
    return this.http.patch(
      `${AUTH_API}/update-resto`,
    {
      name,
      email,
      logo:formData
    },
      httpOptions
    );
  }


}
