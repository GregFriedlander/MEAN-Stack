import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.css']
})
export class UsersShowComponent implements OnInit {
  user = {_id: ""}
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
  	this._route.paramMap.subscribe((params)=>{
  		console.log("the id of the user is:", params.get('id'));
  		this.user._id = params.get('id');
  		
  		// console.log("the name of the user is:", params.get('name'));
  	})
  }

}
