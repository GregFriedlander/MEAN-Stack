import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  users: any[]= [{name: "Kobe"}, {name: "Frobe"}, {name: "Mamba"}]
  constructor(private _http: HttpClient) { }
  getUsers(){
  	return this.users;
  }
  addUser(newUser){
  	this.users.push(newUser);
  	console.log("added a new user, list is now:", this.users);
  }
}
