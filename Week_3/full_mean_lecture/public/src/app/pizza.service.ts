import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class PizzaService {
  pizzaSubject: BehaviorSubject<object[]> = new BehaviorSubject([])
  constructor(private _http: HttpClient) { 
  	this.getPizzas();
  }
  addPizza(pizza){
  	this._http.post('/pizzas', pizza).subscribe((response:any)=>{
  		console.log('got response from server:', response);
  		this.getPizzas();
  	})
  }
  getPizzas(){
  	this._http.get('/pizzas').subscribe((response:any)=>{
  		console.log("response from server", response);
  		this.pizzaSubject.next(response);
  	})
  }
}
