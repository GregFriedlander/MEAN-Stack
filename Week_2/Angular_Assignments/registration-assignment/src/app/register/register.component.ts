import { Component, OnInit } from '@angular/core';
import { Users } from './../users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: Users = new Users();
  user: Users;
  submitted = false;
  

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    this.submitted = true;
    this.user = this.newUser;
    this.newUser = new Users();
  }

}
