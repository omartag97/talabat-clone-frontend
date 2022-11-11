import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://talabat-iti.herokuapp.com/api/users';
const AUTH_API_DRIVER = 'https://talabat-iti.herokuapp.com/api/drivers';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }


  getAdddress(long:any, lat:any){
    return this.http.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${long},${lat}`);

  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      `${AUTH_API}/login`,
    {
      email,
      password
    },
      httpOptions
    );
  }

  register(name: string, email: string, password: string, confirm_password: string, formData: FormData,longitude:any, latitude:any,address_details:any , address_name:any, mobile:any ): Observable<any> {
    return this.http.post(
      `${AUTH_API}/register`,
    {
      name,
      email,
      password,
      confirm_password,
      image:formData,
      longitude,
      latitude,
      address_details,
      address_name,
      mobile
    },
      httpOptions
    );
  }

  registerDriver(email: string, name:string, mobile:number, password: string, confirm_password: string): Observable<any> {
    return this.http.post(
      `${AUTH_API_DRIVER}/registerDriver`,
    {
      email,
      name,
      mobile,
      password,
      confirm_password
    },
      httpOptions
    );
  }
}
