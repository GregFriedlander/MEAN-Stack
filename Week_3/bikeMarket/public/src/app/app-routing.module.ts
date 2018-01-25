import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { LandingComponent } from './landing/landing.component';
import { BrowseComponent } from './landing/browse/browse.component';
import { ListingsComponent } from './landing/listings/listings.component';
import { CreateComponent } from './landing/create/create.component';
import { EditComponent } from './landing/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: LoginRegComponent
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard/browse',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: LandingComponent,
    children: [
      {
        path: 'browse',
        component: BrowseComponent
      },
      {
        path: 'listings',
        component: ListingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
