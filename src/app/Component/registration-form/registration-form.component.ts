import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

import { AuthService } from '../../Services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
deaddress:any;
  latitude: number=0;
  longitude: number=0;
  zoom: number=0;
  address: string='';
  private geoCoder:any;

  @ViewChild('search')
  public searchElementRef!: ElementRef;



  data: any = {};
  form: any = {
    name: null,
    email: null,
    password: null,
    confirm_password: null,
    image: null,
    address_name:null,
    address_details:null,
    mobile:null
  };

  toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async updateImageFile(event: any) {
    const file: File = event.target.files[0];
    const fileBase64 = await this.toBase64(file);
    this.form.image = fileBase64;
  }

  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn = true;
  errorMessage = '';
  isEnabled=false;

  constructor(private authService: AuthService, private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
 ) {}

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });

  }

  onSubmit(): void {


    const { name, email, password, confirm_password, image ,address_name, address_details, mobile} = this.form;

      this.authService
      .register(name, email, password, confirm_password, image, this.longitude, this.latitude, address_details, address_name, mobile)
      .subscribe({
        next: (data) => {
          this.data = data;
        },
        error: (e) => {
          console.log(e);
          this.errorMessage = e.error.message;
          this.isSignUpFailed = true;
        },
        complete: () => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.isLoggedIn = false;

            this.router.navigate(['all']);

        },
      });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.authService.getAdddress(this.longitude,this.latitude).subscribe({
          next: (data) => {
            console.log(data);
             this.deaddress=data;
             this.form.address_details=this.deaddress.address.LongLabel;
          },
          error: (e) => {
          }

        });

        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude:any, longitude:any) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results:any, status:any) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });

    if(this.latitude != 0 && this.longitude !=0)
    {
     this.isEnabled=true;
    }


}

}
