import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestoService } from '../../Services/resto/resto.service';
import { CartService } from 'src/app/Services/cart/cart.service';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css'],
})
export class MenueComponent implements OnInit {
  subTotal = 0;
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

  restMenu: {
    id: any;
    image: string;
    name: string;
    price: number;
  }[] = [];

  restInfo: {
    name: string;
    type: string;
    region: string;
    minOrder: string;
    workingHours: string;
    deliveryTime: string;
    deliveryFee: number;
    cuisines: string;
    onlineTracking: string;
    image: string;
  } = {
    name: '',
    type: '',
    region: '',
    minOrder: '',
    workingHours: '',
    deliveryTime: '',
    deliveryFee: 0,
    cuisines: '',
    onlineTracking: '',
    image: '',
  };
  out: any;
  menuId = 0;

  constructor(
    private router: Router,
    private resto: RestoService,
    private cart: CartService,
    private product: ProductService
  ) {
    this.menuId = router.getCurrentNavigation()?.initialUrl.queryParams['id'];
  }

  ngOnInit(): void {
    this.showMenu();
    this.updateCart();

    this.resto.getMenu(this.menuId).subscribe({
      next: (data) => {
        this.out = data;
        this.restMenu = this.out.data;
        console.log(this.out);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {},
    });

    this.resto.getRest(this.menuId).subscribe({
      next: (data) => {
        this.restInfo = data.data;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {},
    });
  }

  showInfo(): void {
    const info = document.getElementById('info');
    const menu = document.getElementById('menu');
    const infoButton = document.getElementById('infoButton');
    const menuButton = document.getElementById('menuButton');

    if (info) info.style.display = 'block';

    if (menu) menu.style.display = 'none';

    infoButton?.classList.add('selected');
    menuButton?.classList.remove('selected');
  }

  showMenu(): void {
    const info = document.getElementById('info');
    const menu = document.getElementById('menu');
    const infoButton = document.getElementById('infoButton');
    const menuButton = document.getElementById('menuButton');

    if (info) info.style.display = 'none';

    if (menu) menu.style.display = 'block';

    infoButton?.classList.remove('selected');
    menuButton?.classList.add('selected');
  }

  getLive(): any {
    if (this.restInfo.onlineTracking == 'true') return true;
    return false;
  }

  add(id: any, price:number): void {
    console.log(this.cart.getRest());
    if(this.cart.getRest() && this.cart.getRest().restName != this.restInfo.name){
        this.cart.deleteAll();
    }
    else{
      this.cart.setRest(this.restInfo.name, this.restInfo.deliveryFee) ;
      this.cart.addToCart(id,price);
      this.updateCart();
    }
  }

  updateCart(): void {
    // this.checkOut.splice(0);
    let temp: {
      id: any;
      image: string;
      name: string;
      price: number;
    }[] = [] ;
    this.cartArr = this.cart.getCart();
    this.cartArr.forEach((element) => {
      this.product.getProduct(element.id).subscribe({
        next: (data) => {
          temp.push(data.data);
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {},
      });
    });

      this.checkOut = temp;
      // console.log(temp);
      console.log(this.checkOut);
    this.getSubtotal();
    // this.subTotal = this.checkOut.reduce((acc, item) => {
    //   return acc + item.price;
    // }, 0);

    console.log(Object.keys(this.checkOut));
    this.checkOut.forEach((element) => {

      this.subTotal += this.getCount(element.id) * element.price;
    });
  }

  decrease(id: any): void {
    this.cartArr = this.cart.getCart();
    this.cartArr.forEach((element) => {
      if (element.id == id)
        if (element.count > 1) this.cart.updateCart(id, element.count - 1);
        else {
          this.cart.deleteCart(id);
        }
    });
    this.updateCart();
  }

  increase(id: any): void {
    this.cartArr = this.cart.getCart();
    this.cartArr.forEach((element) => {
      if (element.id == id) this.cart.updateCart(id, element.count + 1);
    });
    this.updateCart();
  }

  getCount(id: any) {
    let count = 0;
    this.cartArr = this.cart.getCart();
    this.cartArr.forEach((element) => {
      if (element.id == id) count = element.count;
    });
    return count;
  }

  getSubtotal():void{
    this.subTotal=0;
    this.cartArr.forEach(element =>{
      this.subTotal += element.price * element.count;
      console.log(element.price);
      console.log(element.count);
    })
  }

  routeToCheckout(){
    this.router.navigate(['/checkout']);

  }

}
