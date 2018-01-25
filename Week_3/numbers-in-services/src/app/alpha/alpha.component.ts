import { Component, OnInit } from '@angular/core';
import { MyMathFunctionService } from './../my-math-function.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  AlphaArray: number[] = [];
  constructor(private _myMathFunctionService: MyMathFunctionService) { }

  ngOnInit() {
    this.AlphaArray = this._myMathFunctionService.getAlphaArray();
  }
  addNumberAlpha(){
    this.AlphaArray = this._myMathFunctionService.addNumberToAlpha();
    console.log('addNumberAlpha():', this.AlphaArray)
  }

}
