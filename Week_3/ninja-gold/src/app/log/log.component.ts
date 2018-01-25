import { Component, OnInit, DoCheck } from '@angular/core';
import { NinjagoldServicesService } from './../ninjagold-services.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit, DoCheck {

  activityLog: any[] = [];

  constructor(private _myNinjaGoldService: NinjagoldServicesService) { }

  ngOnInit() {
  }
  ngDoCheck(){
    this.activityLog = this._myNinjaGoldService.getLog(); 
  }

}
