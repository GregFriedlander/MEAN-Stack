import { Component, OnInit } from '@angular/core';
import { ManagementService } from './../management.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  players: any[] = [];
  gameNumber: string = "game1";

  constructor(private _managementService: ManagementService) { }

  ngOnInit() {
    this._managementService.playersSubject.subscribe((playersData)=>{
      this.players = playersData;
    })
    this._managementService.getPlayers();
  }
  pushedPlaying(player_id, status,num){
    console.log('Player Status, ', status);
    this._managementService.editStatus(player_id,status,num);
    this._managementService.getPlayers();
  }
  pickGame(numb){
    this.gameNumber = numb;
    console.log('game number: ', numb);
  }

}
