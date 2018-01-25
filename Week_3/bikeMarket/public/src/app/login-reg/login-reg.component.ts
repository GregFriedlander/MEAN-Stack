import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from './../market.service';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {

  newUser:any = {first_name: "", last_name: "", email: "", password: "", passwordConfirm: ""};
  user: any = {email: "", password: ""};
  errors: any[] = [];

  constructor(private _marketService: MarketService, private _router: Router) { }

  ngOnInit() {
  }

  clickedRegister(){
    this._marketService.addUser(this.newUser)
    .subscribe((data:any)=>{
      console.log('clickedRegister() got response from server: ', data);
      if(data.errors != undefined){
        console.log('there were validation errors');
        this.errors = data;
      }else{
        console.log('added user, redirecting');
        this._router.navigate(['/dashboard']);
      }
    })
  }
  clickedLogin(){
    this._marketService.loginUser(this.user)
    .subscribe((data:any)=>{
      console.log('clickedLogin() got a response from server: ', data);
      if(data.errors != undefined || data.message == 'invalid'){
        console.log('validation errors');
        this.errors = data;
      }else{
        console.log('logged in user, redirecting');
        this._router.navigate(['/dashboard']);
      }
    })
  }

}
