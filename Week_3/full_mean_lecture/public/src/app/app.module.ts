import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PizzaService } from './pizza.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
