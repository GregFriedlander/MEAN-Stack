import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class UsersService {
  users: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: HttpClient) { 
  	this.getUsers();
  }

  getUsers(){
  	this._http.get('https://5a2ed7070e07b70012083ab7.mockapi.io/tasks')
  	.subscribe((data: any[])=>{
  		this.users.next(data);
  	})
  }
  addUser(newNote){
  	this._http.post('https://5a2ed7070e07b70012083ab7.mockapi.io/tasks', newNote).subscribe((response)=>{
  		this.getUsers();
  	})
  }
  // getUsers(){
  // 	return this.users;
  // }
  // addUser(newUser: any){
  // 	// this.users.push(newUser);
  // 	console.log("added a new user, list is now:", this.users);
  // }
}
