import { Component, OnInit } from '@angular/core';
import { ManagementService } from './../management.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: any[] = [];

  constructor(private _managementService: ManagementService) { }

  ngOnInit() {
    this._managementService.playersSubject.subscribe((playersData)=>{
      this.players = playersData;
    })
    this._managementService.getPlayers();
  }
  onDelete(player){
    console.log('the player id is: ', player );
    this._managementService.deletePlayer(player);
    this._managementService.getPlayers();
  }

}
