import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { LandingComponent } from './landing/landing.component';
import { BrowseComponent } from './landing/browse/browse.component';
import { ListingsComponent } from './landing/listings/listings.component';
import { CreateComponent } from './landing/create/create.component';
import { EditComponent } from './landing/edit/edit.component';

import { MarketService } from './market.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    LandingComponent,
    BrowseComponent,
    ListingsComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
