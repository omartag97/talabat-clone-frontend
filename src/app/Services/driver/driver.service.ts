import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://talabat-iti.herokuapp.com/api/restaurants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DriverService {

  constructor(private http: HttpClient) {}

 saveDriver(email: string, name: string, mobile: number, password: FormData): Observable<any> {
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

  getAll(name: string, description: string, formData: FormData): Observable<any> {
    return this.http.post(
      `${AUTH_API}/getAll`,
    {
      name,
      description,
      logo:formData
    },
      httpOptions
    );
  }

    updateResto(name: string, email: string, address: string, formData: FormData): Observable<any> {
    return this.http.patch(
      `${AUTH_API}/updateResto`,
    {
      name,
      email,
      logo:formData
    },
      httpOptions
    );
  }

}



