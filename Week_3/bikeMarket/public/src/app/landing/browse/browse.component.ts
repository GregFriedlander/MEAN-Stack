import { Component, OnInit } from '@angular/core';
import { MarketService } from './../../market.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  allListings: any = [{}];
  shownListing: any = [{}];
  searchTerm: string = "";

  constructor(private _marketService: MarketService) { }

  ngOnInit() {
    this._marketService.getAllListings()
    .subscribe((data)=>{
      console.log('got listings for current user', data);
      this.allListings = data;
      this.shownListing = data;
    })
  }

  searchListings(searchTerm){
    this.shownListing = this.allListings.filter(function(listing){
      return listing.title.toLowerCase().includes(searchTerm.toLowerCase()) || listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

}
