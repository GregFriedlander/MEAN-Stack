import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  @Input() myQuotes: Quote[] = [];
  @Output() deleteQuoteEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  voteUp(data){
    console.log('clicked the vote up button', data);
    data.rating ++;
  }
  voteDown(data){
    console.log('clicked the vote down button', data);
    data.rating --;
  }
  deleteQuote(data){
    console.log('clicked the delete button');
    this.deleteQuoteEvent.emit(data);
  }

}
