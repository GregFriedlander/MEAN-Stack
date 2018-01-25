import { Component, OnInit } from '@angular/core';
import { MyMathFunctionService } from './../my-math-function.service';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {

  difference: number;
  alphaArray: number[] = [];
  constructor(private _myMathFunctionService: MyMathFunctionService) { }

  ngOnInit() {
  }
  doTheMath(){
    this.difference = this._myMathFunctionService.subtractComponents();
  }

}
