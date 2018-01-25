import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersShowComponent } from './users-show/users-show.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'users',
		component: UsersListComponent
	},
	{
		path: 'users/:id',
		component: UsersShowComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
