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

export class AuthRestServiceService {

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



  register(
    store_name:any,
    type:any,
    first_name:any,
    last_name:any,
    phone:any,
    email:any,
    password:any,
    confirm_password:any,
    address:any,
    description:any,
    logo: FormData,
    longitude:any,
    latitude:any
    // min_order , working_hours , delivery_time, (online_tracking) => boolean
    ): Observable<any> {
    return this.http.post(
      `${AUTH_API}/register`,
    {
      store_name:store_name,
      type:type,
      first_name:first_name,
      last_name:last_name,
      phone:phone,
      email:email,
      address:address,
      description:description,
      logo: FormData,
      longitude:longitude,
      latitude:latitude
    },
      httpOptions
    );
  }
}
