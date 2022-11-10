import { Component, OnInit } from '@angular/core';
import { AuthRestServiceService } from 'src/app/Services/authRestService/auth-rest-service.service';
import { ResaurantOrdersService } from 'src/app/Services/RestaurantOders/resaurant-orders.service';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
data:{id:any , delivery_fee:any ,created_at:any, products:{id:any,
      name:any, product_count:any, price:any}[]}[]
      = [];

        dataPrev:{id:any , delivery_fee:any, created_at:any,products:{id:any,
          name:any, product_count:any, price:any}[]}[]
          = [];

  constructor(private restorder:ResaurantOrdersService) { }

  ngOnInit(): void {
    this.showPending();


  }

  setstatus(status:any, id:any):void{
    console.log(status)
    this.restorder.setStatus(status, id).subscribe({
      next: (data) => {
          },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
      },
    });

    let temp =     document.getElementById(id);
    if(temp)
      temp.style.display='none';

  }



  showPrev(): void {
    this.restorder.getPrevOrders().subscribe({
      next: (data) => {
        console.log(data);
        this.dataPrev=data.data;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
      },
    });

    const info = document.getElementById('prev');
    const menu = document.getElementById('pending');
    const infoButton = document.getElementById('infoButton');
    const menuButton = document.getElementById('menuButton');

    if (info) info.style.display = 'block';

    if (menu) menu.style.display = 'none';

    infoButton?.classList.add('selected');
    menuButton?.classList.remove('selected');
  }

  showPending(): void {

    this.restorder.getRestOrders().subscribe({
      next: (data) => {
        console.log(data);
        this.data=data.data;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
      },
    });


    const info = document.getElementById('prev');
    const menu = document.getElementById('pending');
    const infoButton = document.getElementById('infoButton');
    const menuButton = document.getElementById('menuButton');

    if (info) info.style.display = 'none';

    if (menu) menu.style.display = 'block';

    infoButton?.classList.remove('selected');
    menuButton?.classList.add('selected');
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


}
