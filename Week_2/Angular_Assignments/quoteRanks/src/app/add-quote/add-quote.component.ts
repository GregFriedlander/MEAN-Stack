import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  newQuote: Quote = new Quote();
  @Output() addNewQuote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('New Quote Added: ', this.newQuote);
    this.addNewQuote.emit(this.newQuote);
    this.newQuote = new Quote();
  }

}
