import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";

import { from } from "rxjs";

@Component({
  selector: "app-cart-content",
  templateUrl: "./cart-content.component.html",
  styleUrls: ["./cart-content.component.css"]
})
export class CartContentComponent implements OnInit {
  products: Product[] = [
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

  removeProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  inputQuantity(id: number, inputElement: HTMLInputElement) {
    console.log(id, inputElement, inputElement.value);
  }

  constructor() {}

  ngOnInit() {}
}
