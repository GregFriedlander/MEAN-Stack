import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MarketService {

  constructor(private _http: HttpClient) { }

  addUser(userObj){
    return this._http.post('/adduser', userObj);
  }
  loginUser(userObj){
    return this._http.post('/login', userObj);
  }
  getCurrentUser(){
    return this._http.get('/current');
  }
  destroySession(){
    return this._http.get('/destroysession');
  }
  addListing(listingObj){
    return this._http.post('/addlisting', listingObj);
  }
  getYourListings(){
    return this._http.get('/getyourlistings');
  }
  getAllListings(){
    return this._http.get('/getall');
  }

}
