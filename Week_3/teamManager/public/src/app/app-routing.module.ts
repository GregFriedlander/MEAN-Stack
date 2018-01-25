import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { GamesComponent } from './games/games.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'players/list',
        pathMatch: 'full'
    },
    {
        path: 'players/list',
        component: PlayerListComponent
    },
    {
        path: 'players/addplayer',
        component: AddPlayerComponent
    },
    {
        path: 'status/game/1',
        component: GamesComponent
    },
    {
        path: 'status/game/2',
        component: GamesComponent
    },
    {
        path: 'status/game/3',
        component: GamesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }