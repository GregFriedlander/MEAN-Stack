import { Component, OnInit } from '@angular/core';
import { MarketService } from './../market.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  currentUser: any = {};

  constructor(private _marketService: MarketService, private _router: Router) { }

  ngOnInit() {
    this._marketService.getCurrentUser()
  	.subscribe((data)=>{
  		console.log("got current user from db:", data);
  		this.currentUser = data;
  	})
  }

  clickedLogout(){
    this._marketService.destroySession()
    .subscribe((data)=>{
      console.log('logging out, redirecting');
      this._router.navigate(['']);
    })
  }

}
