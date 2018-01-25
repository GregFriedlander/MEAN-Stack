import { Component, OnInit } from '@angular/core';
import { PizzaService } from './../pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  newPizza: any = {name: "", type: ""}
  pizzas: any[] = [];
  constructor(private _pizzaService: PizzaService) { }

  ngOnInit() {
    this._pizzaService.pizzaSubject.subscribe((pizzaData)=>{
      this.pizzas = pizzaData;
    })

  }
  onSubmit(){
  	console.log('onSubmit', this.newPizza);
  	this._pizzaService.addPizza(this.newPizza);
  }

}
