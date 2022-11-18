import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestProductsService } from 'src/app/Services/RestProducts/rest-products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  data:
  {
    id:any,
    image:any,
    name:any,
    price:any
  }[]=
  [];

  constructor(private products:RestProductsService,
   private router: Router
    ) { }

  ngOnInit(): void {
    this.products.getRestProducts().subscribe({
      next: (data) => {
        this.data = data.data;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {


      },
    });

  }
  edit(id:any){
    this.router.navigate(['product-edit'], { queryParams: { id: id  }})

  }

  delete(id:any){

        this.products.deletProduct(id).subscribe({
      next: (data) => {

      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {

          for(let i = 0; i < this.data.length; i++){
            if(this.data[i].id == id){
              this.data.splice(i,1);
            }
          }

      },
    });

  }
  goto(){
    this.router.navigate(['rest-products']);
  }

}
