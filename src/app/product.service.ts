import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  getProducts():Product[] {
  this.products = [
    {
      id: 1,
      name: "Iphone 5",
      description: "Iphone 5",
      image:
        "https://drop.ndtv.com/TECH/product_database/images/910201410301AM_635_apple_iphone_6.jpeg?downsize=*:180&output-quality=80",
      price: 1000,
      quantity: 1
    },
    {
      id: 2,
      name: "Iphone 6",
      description: "Iphone 6",
      image:
        "https://drop.ndtv.com/TECH/product_database/images/910201410301AM_635_apple_iphone_6.jpeg?downsize=*:180&output-quality=80",
      price: 2000,
      quantity: 2
    }
  ];

  return this.products;
  }

  removeProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    let desc = this.products.find(product => product.id === id).description;

    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  handleChangeQuantity(p: Product) {
    
  }

  constructor() { }
}
