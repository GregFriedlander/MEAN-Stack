import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GithubScoreService } from './github-score.service';

import { AppComponent } from './app.component';
import { MainSectionComponent } from './main-section/main-section.component';



@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
