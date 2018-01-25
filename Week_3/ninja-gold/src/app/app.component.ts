import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { NinjagoldServicesService } from './ninjagold-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  counter: number = 0;
  constructor(private _myNinjaGoldService: NinjagoldServicesService) { }

  ngOnInit() {
    // this.counter = this._myNinjaGoldService.getCounter();
  }

  ngDoCheck(){
    console.log('do check in app component triggered');
    this.counter = this._myNinjaGoldService.getCounter();
  }
}
