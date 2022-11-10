import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { RestoService } from '../../Services/resto/resto.service';
import { Router } from '@angular/router';
import { AuthRestServiceService } from 'src/app/Services/authRestService/auth-rest-service.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})

export class AddRestoComponent implements OnInit {


  latitude: number=0;
  longitude: number=0;
  zoom: number=0;
  address: string='';
  private geoCoder:any;

  @ViewChild('search')
  public searchElementRef!: ElementRef;




  data: any = {};
  form: any = {
    store_name: null,
    type:null,
    first_name:null,
    last_name:null,
    phone:null,
    email: null,
    password:null,
    confirm_password:null,
    address: null,
    description:null,
    logo: null,
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
    this.form.logo = fileBase64;
  }

  constructor(private resto: RestoService, private router: Router, private authRestService:AuthRestServiceService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
) { }

  deaddress:any;
  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn = true;
  errorMessage = '';
  isEnabled=false;

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;


    });

  }

  onSubmit(): void {


    const {
      store_name,
      type,
      first_name,
      last_name,
      phone,
      email,
      password,
      confirm_password,
      address,
      description,
      logo

    } = this.form;



      this.authRestService
      .register(
        store_name,
        type,
        first_name,
        last_name,
        phone,
        email,
        password,
        confirm_password,
        address,
        description,
        logo,
        this.longitude,
        this.latitude
    )
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
          this.router.navigate(['restlogin']);
          //redirect this.data.role
          // if (this.data.role) {
          //   this.router.navigate(['admin']);
          // } else {
          //   this.router.navigate(['user']);

          // }
        },
      });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
        this.authRestService.getAdddress(this.longitude,this.latitude).subscribe({
          next: (data) => {
            console.log(data);
             this.deaddress=data;
          },
          error: (e) => {
          }

        });


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











