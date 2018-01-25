import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  quotes: Quote[] = [];

  addQuoteFromChild(data: Quote){
    console.log('Got events from child, contains: ', data);
    this.quotes.push(data);
  }

  deleteQuoteFromArray(data: Quote){
    const idx = this.quotes.indexOf(data);
    this.quotes.splice(idx, 1);
  }
}
