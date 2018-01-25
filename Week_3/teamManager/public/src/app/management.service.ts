import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class ManagementService {

  playersSubject: BehaviorSubject<object[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  addPlayer(player){
    this._http.post('/createplayer', player).subscribe((response:any)=>{
      console.log('add player got a response from the server: ', response);
      this.getPlayers();
    })
  }
  getPlayers(){
    this._http.get('/getplayers').subscribe((response:any)=>{
      console.log('got a response from the server: ', response);
      this.playersSubject.next(response);
    })
  }
  deletePlayer(player){
    this._http.post('/deleteplayer/' + player, player).subscribe((response:any)=>{
      console.log('got a response from the server: ', response);
      this.getPlayers();
    })
  }
  editStatus(id,status,game){
    console.log('hit edit status in services');
    this._http.post('/updateplayer/'+id+'/'+status+'/'+game, id).subscribe((response:any)=>{
      console.log('editStatus() got a response from the server: ', response);
      this.getPlayers();
    })
  }

}
