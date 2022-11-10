import { Component,OnInit  } from '@angular/core';
import { TokenStorageService } from '../app/Services/token/token-storage.service';
import { CartService } from './Services/cart/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
ngOnInit(): void {
    
}
}
