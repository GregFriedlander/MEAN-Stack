import { Component, OnInit, OnChanges } from '@angular/core';
import { MarketService } from './../../market.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {

  yourListings: any = [{}];
  constructor(private _marketService: MarketService) { }

  ngOnInit() {
    this._marketService.getYourListings()
    .subscribe((data)=>{
      console.log('got listings for current user', data);
      this.yourListings = data;
    })
  }
  ngOnChanges(){
    this._marketService.getYourListings()
    .subscribe((data)=>{
      console.log('got listings for current user', data);
      this.yourListings = data;
    })
  }

}
