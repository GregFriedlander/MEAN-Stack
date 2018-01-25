import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private _usersService: UsersService) { }
  myUsers: any[] = [];
  ngOnInit() {
  	this.myUsers = this._usersService.getUsers();
  }

}
