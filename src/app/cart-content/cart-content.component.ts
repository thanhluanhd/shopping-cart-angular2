import { Component, OnInit, Input, Output,EventEmitter } from "@angular/core";


import { from } from "rxjs";

import { Product } from '../product.model';

@Component({
  selector: "app-cart-content",
  templateUrl: "./cart-content.component.html",
  styleUrls: ["./cart-content.component.css"]
})
export class CartContentComponent implements OnInit {
  
@Input() products;
@Output() onInputQuantity = new EventEmitter();

@Output() onRemoveProduct = new EventEmitter();
  constructor() {}

  
  
  inputQuantity(q :HTMLInputElement,p: Product) {
    console.log(q.value);
    p.quantity = parseInt(q.value);
    this.onInputQuantity.emit(p);
  }

  removeProduct(p: Product) {
    this.onRemoveProduct.emit(p);
  }

  ngOnInit() {}
}
