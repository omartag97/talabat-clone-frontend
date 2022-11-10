import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { PlaceOrderService } from 'src/app/Services/placeOrder/place-order.service';
import { ResaurantOrdersService } from 'src/app/Services/RestaurantOders/resaurant-orders.service';
import { TokenStorageService } from 'src/app/Services/token/token-storage.service';
import { UserService } from 'src/app/Services/user/user.service';
import { UserOrdersService } from 'src/app/Services/UserOrders/user-orders.service';



@Component({
  selector: 'app-user-summery',
  templateUrl: './user-summery.component.html',
  styleUrls: ['./user-summery.component.css']
})
export class UserSummeryComponent implements OnInit {

  form: any = {
    name:'null',
    email: 'alia',
    password: null,
    new_password:null,
    confirm_password:null,
    mobile:'0102554555'
  };

  // userData:any={
  //   name:'null',
  //   email: 'null',
  //   mobile:'0100252525'
  // }


  cur: {
    id: any;
    delivery_fee: any,
    created_at: any,
    restaurant: {
      id: any,
      store_name: any,
      image: any,
    },
    products: {
      id: any,
      name: any;
      product_count: any
      price: any,
    }[]}={
      id: null,
      delivery_fee: null,
      created_at: null,
      restaurant: {
        id: null,
        store_name: null,
        image: null,
      },
      products: [{
        id: null,
        name: null,
        product_count: null,
        price: null}]};



      restData:{
        store_name:any,
        image:any
      }={
        store_name:'any',
        image:'any'
      };
      data:
  {
    id:any,
    delivery_fee:any,
    created_at:any,
    restaurant:
    {
      id:any,
      store_name:any,
      image:any
    },
    products:
    {
      id:any,
      name:any,
      product_count:any,
      price:any
    }[]
  }[]
    = [

      ];


  constructor(private userorder:UserOrdersService,
    private place:PlaceOrderService,
    private token:TokenStorageService,
    private router: Router,
    private user:UserService
    ) { }

  ngOnInit(): void {
    this.selected('info','orders');
    this.user.getUserDetails().subscribe({
      next: (data) => {
        this.form = data.data;
        console.log(this.data);


      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
      }

    });

    

    this.userorder.getOrders().subscribe({
      next: (data) => {
        this.data = data.data;
        console.log(this.data);


      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {


      },
    });


  }
  selected(id:any,id2:any):void{
    let el1 = document.getElementById(id)
      if(el1) el1.style.borderLeft='solid 2px #ff5a00';
    let el2 = document.getElementById(id2)
      if(el2) el2.style.borderLeft='none';


      if(id=='info'){
        let temp = document.getElementById('order-details');
        let temp2 = document.getElementById('info-details');
        if(temp) temp.style.display='none';
        if(temp2) temp2.style.display='block';

      }

      if(id=='orders'){
        let temp = document.getElementById('order-details');
        let temp2 = document.getElementById('info-details');

        if(temp) temp.style.display='block';
        if(temp2) temp2.style.display='none';
      }


  }

  open(id:any):void{

    this.data.forEach(element => {
      if(element.id == id){
        this.cur = element;
      }
    });
    let temp = document.getElementById('over');

    document.getElementsByTagName('body')[0].style.overflow='hidden';

    let temp2 = document.getElementById('container');

    if(temp)  temp.style.display='block';

    if(temp2) temp2.style.opacity='0.4';

  }

  close(){
    let temp = document.getElementById('over');

    document.getElementsByTagName('body')[0].style.overflow='visible';

    let temp2 = document.getElementById('container');

    if(temp)  temp.style.display='none';

    if(temp2) temp2.style.opacity='1';

  }

  getSub(id: any) {
    let temp:{id:any,
      name:any, product_count:any, price:any}[]=[];
    let count = 0;
    this.data.forEach((element)=>{
      if(element.id == id){
        temp =element.products;
      }
    });


      temp.forEach((sub)=>{
       count += sub.price * sub.product_count;
    })
    return count;
  }

  getStatus(id:any){
    let status = '';
    this.place.orderGetStatus(id).subscribe({
      next: (data) => {
        console.log(data);
        status=data.data
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {


      },
    });
    return status;

  }
   goto(){
   this.token.signOut();
   this.router.navigate(['/login']).then(()=>{
     window.location.reload();

   });

  }

isUpdated=false;
onSubmit(){
  const { name, email, password, new_password,confirm_password, mobile } = this.form;

  

   this.user.updateUser(name, email, password, new_password, confirm_password, mobile).subscribe({
    next: (data) => {
    },
    error: (e) => {
      console.log(e);
    },
    complete: () => {
      this.isUpdated=true;

    },
  });

}
}
