import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NinjagoldServicesService } from './ninjagold-services.service';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ActionsComponent } from './actions/actions.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ActionsComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NinjagoldServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
