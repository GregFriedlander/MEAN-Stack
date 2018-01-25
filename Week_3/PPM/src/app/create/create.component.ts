import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newProduct: any = {title: "", price: "", image: ""};

  constructor(private _myProductService: ProductService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this._myProductService.addProduct(this.newProduct);
    this._router.navigate(['products']);
    
  }

}
