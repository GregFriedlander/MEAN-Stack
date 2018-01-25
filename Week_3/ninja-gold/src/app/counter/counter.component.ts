import { Component, OnInit, OnChanges } from '@angular/core';
import { NinjagoldServicesService } from './../ninjagold-services.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges{

  counter: number = 0;
  constructor(private _myNinjaGoldService: NinjagoldServicesService) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.counter = this._myNinjaGoldService.getCounter();
  }

}
