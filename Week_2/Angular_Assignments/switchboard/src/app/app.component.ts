import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  switchBoardButtons = [
    {name: "on", status: true, background: "green"},
    {name: "on", status: true, background: "green" },
    {name: "on", status: true, background: "green" },
    {name: "on", status: true, background: "green" },
    {name: "on", status: true, background: "green" },
    {name: "on", status: true, background: "green" },
    {name: "on", status: true, background: "green" },
    {name: "on", status: true, background: "green" },
  ];

  onButtonClick(button){
    if(button.status == true){
      button.status = false;
      button.name = "off";
      button.background = "red";
    }
    else if(button.status == false){
      button.status = true;
      button.name = "on";
      button.background = "green";
    }
  }

}
