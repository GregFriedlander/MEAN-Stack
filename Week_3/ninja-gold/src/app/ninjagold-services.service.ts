import { Injectable } from '@angular/core';

@Injectable()
export class NinjagoldServicesService {

  randomNumber: number;
  goldCount: number = 0;
  activityLog: any[] = [];

  constructor() { }

  getNumber(min,max){
    console.log('generating the random number');
    this.randomNumber = Math.floor((Math.random()*(max-min+1))+min);
    this.goldCount += this.randomNumber;
    return this.randomNumber;
  }

  getCounter(){
    console.log('this is my gold count:', this.goldCount);
    return this.goldCount;
  }

  pushIntoLog(data){
    this.activityLog.push(data);
    console.log('The Activity Log:', this.activityLog);
    return this.activityLog;
  }

  getLog(){
    return this.activityLog;
  }

}
