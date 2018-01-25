import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {
  newUser: any = {name: ""};
  constructor(private _usersService: UsersService) { }

  ngOnInit() {}
  onSubmit(){
  	console.log("invoked onSubmit", this.newUser);
  	this._usersService.addUser(this.newUser);
  	this.newUser = {name: ""};

  }
}
