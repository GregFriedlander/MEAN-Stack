import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, DoCheck {

  productList: any[] = [];
  constructor(private _myProductService: ProductService) { }

  ngOnInit() {
  }
  ngDoCheck() {
    this.productList = this._myProductService.getProducts();
  }
  onDelete(data){
    console.log('hit the delete button, data: ', data);
    this._myProductService.deleteProduct(data);
  }

}
