import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestProductsService } from 'src/app/Services/RestProducts/rest-products.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  form:any={
    name:null,
    price:null,
    image:null
  }

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

  constructor(private products:RestProductsService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const { name, price, image } = this.form;
    console.log(this.form);
    this.products.postProduct(name, price, image).subscribe({
      next: (data) => {   
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.router.navigate(['rest-products']);

      },
    })
  }

}
