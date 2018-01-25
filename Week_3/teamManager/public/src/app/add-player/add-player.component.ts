import { Component, OnInit } from '@angular/core';
import { ManagementService } from './../management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  newPlayer: any = {name: '', position: ''};

  constructor(private _managementService: ManagementService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('hit submit, new player: ', this.newPlayer);
    this._managementService.addPlayer(this.newPlayer);
    this.newPlayer = {name: '', position: ''};
    this._router.navigate(['players','list']);
  }

}
