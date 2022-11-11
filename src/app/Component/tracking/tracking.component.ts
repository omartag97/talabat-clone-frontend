
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart/cart.service';
import { PlaceOrderService } from 'src/app/Services/placeOrder/place-order.service';
import { ProductService } from 'src/app/Services/product/product.service';
import { RestoService } from 'src/app/Services/resto/resto.service';
import { TokenStorageService } from 'src/app/Services/token/token-storage.service';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})

export class TrackingComponent implements OnInit {
  status:any;
  orderId: any;
  creditSelected = false;
  subTotal = 0;
  deliveryFee = 0;
  payment: any;

  address: {
    address_name: any,
    address_details: any,
    mobile: any
  } = {
      address_name: '',
      address_details: '',
      mobile: ''
    };


  cartArr: {
    id: any,
    count: number,
    price: number
  }[] = [
    ];

  checkOut: {
    id: any;
    image: string;
    name: string;
    price: number;
  }[] = [];

  constructor(private resto: RestoService,
    private cart: CartService,
    private product: ProductService,
    private token: TokenStorageService,
    private user: UserService,
    private place: PlaceOrderService,
    private router: Router
  ) {
    this.orderId = router.getCurrentNavigation()?.initialUrl.queryParams['id'];

  }


  ngOnInit(): void {
    this.getStatus();

    this.user.getDetails().subscribe({
      next: (data) => {

        this.address = data;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {

      },
    });

    this.cartArr = this.cart.getCart();
    this.cartArr.forEach((element) => {
      this.product.getProduct(element.id).subscribe({
        next: (data) => {
          this.checkOut.push(data.data);
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => { },
      });
    });

    this.getSubtotal();
    this.deliveryFee = this.cart.getRest().deiveryFee;

  }



  getStatus(){
    this.status = 'pending';
    setInterval(()=>{
      this.place.orderGetStatus(this.orderId).subscribe({
        next: (data) => {

          this.status = data.data;
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {

        },
      });
    },10000);

  }




  getCount(id: any) {
    let count = 0;
    this.cartArr = this.cart.getCart();
    this.cartArr.forEach((element) => {
      if (element.id == id) count = element.count;
    });
    return count;
  }

  getSubtotal(): void {
    this.subTotal = 0;
    this.cartArr.forEach(element => {
      this.subTotal += element.price * element.count;
    })
  }
  getRestName(): any {
    return this.cart.getRest().restName;
  }

  select(id: any): void {
    let element1 = document.getElementById(id);

    let element2;
    if (id == 'cash') {
      this.payment = 'cash';
      element2 = document.getElementById('credit');
      this.creditSelected = false;
    }
    else {
      this.payment = 'credit';
      element2 = document.getElementById('cash');
      this.creditSelected = true;

    }

    console.log(this.creditSelected);

    if (element1)
      element1.style.border = 'solid 2px #ff5a00';
    if (element2)
      element2.style.border = 'none';
  }
  placeOrder() {
    let temp: {}[] = [];
    console.log(this.payment)
    this.cartArr.forEach(element => {
      temp.push({ product_id: element.id, product_count: element.count });
    });


    this.place.placeOrder(temp,
      this.getRestName(),
      (document.getElementById('request') as HTMLInputElement).value,
      this.deliveryFee,
      this.payment)
      .subscribe({
        next: (data) => {

        },
        error: (e) => {
          console.log(e);
        },
        complete: () => { },
      });

  }

}






