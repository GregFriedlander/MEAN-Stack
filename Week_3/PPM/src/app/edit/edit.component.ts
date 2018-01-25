import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  myProduct: any = {title: "", price: "", image: ""};

  constructor(private _myProductService: ProductService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      var productName: any = params.get('name');
      var singleItem = this._myProductService.getSingleProduct(productName);
      this.myProduct.title = singleItem.title;
      this.myProduct.price = singleItem.price;
      this.myProduct.image = singleItem.image;
    })
  }
  onSubmit(){
    this._router.navigate(['products']);
  }
  
}
