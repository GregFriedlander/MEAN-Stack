import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any[] = [{_id: 1, name: "Bob"}, {_id: 2, name: "Rob"}]
  constructor() { }

  ngOnInit() {
  }

}
