import { ImageLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestoService } from '../../Services/resto/resto.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-all-resto',
  templateUrl: './all-resto.component.html',
  styleUrls: ['./all-resto.component.css']
})



export class AllRestoComponent implements OnInit {
  data: {
    id:any,
    store_name:string,
    description:string,
    image:string
  }[] = [ ];

  out: any;
  constructor(private resto: RestoService, private router: Router) { }

  ngOnInit(): void {
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

  clickhandle(id:any):void{

    this.router.navigate(['/restaurant'], { queryParams: { id: id  }});



  }
}
