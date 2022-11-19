import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart/cart.service';
import { TokenStorageService } from 'src/app/Services/token/token-storage.service';

@Component({
  selector: 'app-naav-bar',
  templateUrl: './naav-bar.component.html',
  styleUrls: ['./naav-bar.component.css']
})
export class NaavBarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService, private cart:CartService,
    private router:Router) { }

  ngOnInit(): void {
    if(this.tokenStorageService.getToken())
      this.isLoggedIn = true;
    else
      this.isLoggedIn = false;

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  getTotalCount() {
    let count = 0;
    this.cart.getCart().forEach((element: { id: any; count: number; }) => {
      count +=element.count;
    });

    return count;
    }

    goto():void{
      this.router.navigate(['/all']).then(()=>{
        window.location.reload();

    });
    }

    goTo(id: any):void{
      this.router.navigate([id]).then(()=>{
        window.location.reload();

    });
  }
}
