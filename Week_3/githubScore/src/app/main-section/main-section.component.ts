import { Component, OnInit } from '@angular/core';
import { GithubScoreService } from './../github-score.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  newUser: any = {username: ""};
  user: any = {};
  constructor(private _gitHubScoresService: GithubScoreService) { }

  ngOnInit() {
    this._gitHubScoresService.user.subscribe((response)=>{
      this.user = response;
    })
  }

  onSubmit(){
    console.log('This is the Username Entered: ', this.newUser);
    this._gitHubScoresService.getScore(this.newUser.username);
    
  }

}
  