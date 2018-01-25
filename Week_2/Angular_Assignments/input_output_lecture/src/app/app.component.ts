import { Component } from '@angular/core';
import { User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: User[] = [ new User ("Kobe", "goat"), new User("TB", "might be a goat")];
  addUserFromChild(data: User){
  	console.log("got event from child, contains", data);
  	this.users.push(data);
  }
}
