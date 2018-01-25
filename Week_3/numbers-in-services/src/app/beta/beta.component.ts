import { Component, OnInit } from '@angular/core';
import { MyMathFunctionService } from './../my-math-function.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  BetaArray: number[] = [];
  constructor(private _myMathFunctionService: MyMathFunctionService) { }

  ngOnInit() {
    this.BetaArray = this._myMathFunctionService.getBetaArray();
  }
  addNumberBeta(){
    this.BetaArray = this._myMathFunctionService.addNumberToBeta();
  }

}
