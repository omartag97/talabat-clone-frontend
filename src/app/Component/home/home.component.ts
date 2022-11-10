import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService  } from '../../Services/user/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService , private router:Router) { }

  ngOnInit(): void {


  }

  goto(id: any):void{
    this.router.navigate([id]).then(()=>{
      window.location.reload();

  });
}
}
