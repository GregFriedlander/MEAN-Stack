import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  productList: any[] = [
    {title: "iPhone", price: 300, image: "n/a"},
    {title: "MacBookPro", price: 1800, image: "n/a"},
    {title: "Maschine_MKIII", price: 700, image: "n/a"},
    {title: "MPC2K", price: 1000, image: "n/a"}
  ];

  constructor() { }

  findIdx(arr, attr, val){
    for(var x = 0; x < arr.length; x++){
      if(arr[x][attr]==val){
        return x;
      }
    }
    return -1;
  }

  getProducts(){
    return this.productList;
  }
  addProduct(product){
    this.productList.push(product);
  }
  getSingleProduct(productName){
    console.log('hit getSingleProduct');
    console.log('Product Name: ', productName);
    var idx = this.findIdx(this.productList,'title',productName);
    console.log('my index: ', idx);
    console.log('my object: ', this.productList[idx]);
    return this.productList[idx];
  }
  deleteProduct(product){
    var idx = this.findIdx(this.productList,'title',product);
    this.productList.splice(idx,1);
  }

}
