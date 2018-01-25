import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User = new User();
  users: User[] = [];
  sumitted = 

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
  	console.log(this.newUser);
  	this.users.push(this.newUser);
  	this.newUser = new User();
  }
}
