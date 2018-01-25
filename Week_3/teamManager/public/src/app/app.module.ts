import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GamesComponent } from './games/games.component';

import { ManagementService } from './management.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    AddPlayerComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
