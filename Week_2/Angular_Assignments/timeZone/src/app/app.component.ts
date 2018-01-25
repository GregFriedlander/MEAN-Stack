import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();

  colorOn: boolean = false;

  timezones = [
    {name: "PST", time: this.today.toLocaleString('en-US', {timeZone: 'America/Los_Angeles' }), color: "white"},
    {name: "MST", time: this.today.toLocaleString('en-US', {timeZone: 'America/Denver' }), color: "white"},
    {name: "CST", time: this.today.toLocaleString('en-US', {timeZone: 'America/Chicago' }), color: "white"},
    {name: "EST", time: this.today.toLocaleString('en-US', {timeZone: 'America/New_York' }), color: "white"},
    {name: "Clear", time: "", color: "white"}
  ]

  onButtonClick(data, data2){
    this.colorOn = true;
    this.today = data;
    for(var x = 0; x < this.timezones.length; x++){
      this.timezones[x].color = "white";
    }
    data2.color = "yellow";
  }
}
