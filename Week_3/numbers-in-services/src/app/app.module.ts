import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyMathFunctionService } from './my-math-function.service';


import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { DifferenceComponent } from './difference/difference.component';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    DifferenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyMathFunctionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
