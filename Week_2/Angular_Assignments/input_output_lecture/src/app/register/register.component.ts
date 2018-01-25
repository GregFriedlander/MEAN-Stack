import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: User = new User("Kobe", 'goat');
  @Output() registerEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
  	console.log(this.newUser);
    this.registerEventEmitter.emit(this.newUser);
  	this.newUser = new User();
  }
}
