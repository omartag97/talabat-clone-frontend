import { ImageLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestoService } from '../../Services/resto/resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  data: {
    id:any,
    store_name:string,
    description:string,
    image:string
  }[] = [ ];

  out: any;
  constructor(private resto: RestoService, private router: Router) { }

  ngOnInit(): void {
    this.showMenu();
    this.resto
    .getAll()
    .subscribe({
      next: (data) => {
        this.out = data;
        this.data = this.out.data
        console.log(this.data);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {

      },
    });

  }
  showInfo(): void {
    const info = document.getElementById('info');
    const menu = document.getElementById('menu');
    const infoButton = document.getElementById('infoButton');
    const menuButton = document.getElementById('menuButton');
    if (menu) menu.style.display = 'none';

    setTimeout(() => {
  if (info) info.style.display = 'block';
}, 200);



    infoButton?.classList.add('selected');
    menuButton?.classList.remove('selected');
  }

  showMenu(): void {
    const info = document.getElementById('info');
    const menu = document.getElementById('menu');
    const infoButton = document.getElementById('infoButton');
    const menuButton = document.getElementById('menuButton');

    if (info) info.style.display = 'none';
setTimeout(() => {
  if (menu) menu.style.display = 'block';

}, 200);

    infoButton?.classList.remove('selected');
    menuButton?.classList.add('selected');
  }

  clickhandle(id:any):void{

    this.router.navigate(['/restaurant'], { queryParams: { id: id  }});



  }

}
