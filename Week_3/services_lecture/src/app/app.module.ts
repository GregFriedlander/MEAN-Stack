import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UsersService } from './users/users.service';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersNewComponent } from './users/users-new/users-new.component';
import { UsersListComponent } from './users/users-list/users-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersNewComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
