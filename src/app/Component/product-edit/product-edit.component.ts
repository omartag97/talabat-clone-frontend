import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestProductsService } from 'src/app/Services/RestProducts/rest-products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form:any={
    name:null,
    price:null
  }

  data:{
    id:any,
    name:any,
    price:any,
    image:any
  }={
    id:15,
    name:'amira',
    price:25,
    image:'any'
  };
  id:any;

  constructor(private products:RestProductsService,
    private router: Router) {

      this.id = router.getCurrentNavigation()?.initialUrl.queryParams['id'];
      console.log(this.id);

    }

  ngOnInit(): void {

        this.products.getProduct(this.id).subscribe({
      next: (data) => {
        this.data = data.data;

      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.form.name=this.data.name;
        this.form.price=this.data.price;
      },
    });
  }

  onSubmit(){
    const { name, price } = this.form;

    console.log(name);
    this.products.editProduct(this.id, name, price).subscribe({
      next: (data) => {

      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
    this.router.navigate(['rest-products']);
      },
    });
  }
}
