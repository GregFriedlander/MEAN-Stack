import { Injectable } from '@angular/core';

@Injectable()
export class MyMathFunctionService {

  AlphaArray: number[] = [];
  BetaArray: number[] = [];
  constructor() { }

  getAlphaArray(){
    return this.AlphaArray;
  }
  getBetaArray(){
    return this.BetaArray;
  }
  addNumberToAlpha(){
    var randomNumber = Math.floor((Math.random()*10)+1);
    this.AlphaArray.push(randomNumber);
    console.log('AlphaArray on Service end:', this.AlphaArray);
    return this.AlphaArray;
  }
  addNumberToBeta(){
    var randomNumber2 = Math.floor((Math.random()*10)+1);
    this.BetaArray.push(randomNumber2);
    return this.BetaArray;
  }
  addTogetherAlpha(){
    var sumAlpha = 0;
    for(var x = 0; x < this.AlphaArray.length; x++){
      sumAlpha += this.AlphaArray[x];
    }
    return sumAlpha;
  }
  addTogetherBeta(){
    var sumBeta = 0;
    for(var x = 0; x < this.BetaArray.length; x++){
      sumBeta += this.BetaArray[x];
    }
    return sumBeta;
  }
  subtractComponents(){
    var compAlpha = this.addTogetherAlpha();
    console.log('addAlpha func:', this.addTogetherAlpha());
    var compBeta = this.addTogetherBeta();
    var total = (compAlpha - compBeta);
    return total;
  }

}
