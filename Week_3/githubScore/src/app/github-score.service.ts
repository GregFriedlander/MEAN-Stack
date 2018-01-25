import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class GithubScoreService {

  user: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getScore(username: string){
    this._http.get('https://api.github.com/users/' + username)
    .subscribe((data:any[])=>{
      this.user.next(data);
    })

  }

}
