import { Component, OnInit, OnChanges } from '@angular/core';
import { NinjagoldServicesService } from './../ninjagold-services.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit, OnChanges {

  farmEarnings: number;
  caveEarnings: number;
  casinoEarnings: number;
  houseEarnings: number;
  goldEarned: number = 0;

  constructor(private _myNinjaGoldService: NinjagoldServicesService) { }

  ngOnInit() {
  }
  ngOnChanges() {
    return this._myNinjaGoldService.getCounter();
  }

  farmButtonPressed(){
    this.farmEarnings = this._myNinjaGoldService.getNumber(2,5);
    console.log('Farm Earnings: ', this.farmEarnings);
    this._myNinjaGoldService.pushIntoLog("You've earned " + this.farmEarnings + " gold at the farm");
    return this._myNinjaGoldService.getCounter();
  }
  caveButtonPressed(){
    this.caveEarnings = this._myNinjaGoldService.getNumber(5,10);
    console.log('Cave Earnings: ', this.caveEarnings);
    this._myNinjaGoldService.pushIntoLog("You've earned " + this.caveEarnings + " gold at the cave");
    return this._myNinjaGoldService.getCounter();
  }
  casinoButtonPressed(){
    this.casinoEarnings = this._myNinjaGoldService.getNumber(-20,20);
    console.log('Casino Earnings: ', this.casinoEarnings);
    if(this.casinoEarnings > 0){
      this._myNinjaGoldService.pushIntoLog("You've earned " + this.casinoEarnings + " gold at the casino");
    }else{
      this._myNinjaGoldService.pushIntoLog("You've lost " + Math.abs(this.casinoEarnings) + " gold at the casino");
    }
    return this._myNinjaGoldService.getCounter();
  }
  houseButtonPressed(){
    this.houseEarnings = this._myNinjaGoldService.getNumber(7,15);
    console.log('House Earnings: ', this.houseEarnings);
    this._myNinjaGoldService.pushIntoLog("You've earned " + this.houseEarnings + " gold at the house");
    return this._myNinjaGoldService.getCounter();
  }

}
