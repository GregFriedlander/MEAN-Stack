import { Component, OnInit } from '@angular/core';
import { MarketService } from './../../market.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newListing: any = {title: "", description: "", price: 0, location: "", image: ""};
  errors: any[] = [];

  constructor(private _marketService: MarketService) { }

  ngOnInit() {
    
  }
  createListing(){
    this._marketService.addListing(this.newListing)
    .subscribe((data:any)=>{
      console.log('createListing() got a response from server: ', data);
      if(data.errors != undefined){
        console.log('there were errors');
        this.errors = data;
      }else{
        console.log('added a new listing');
        this.newListing = {title: "", description: "", price: 0, location: "", image: ""};
        this._marketService.getYourListings();
      }
    })
  }

}
