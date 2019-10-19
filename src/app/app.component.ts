import { Component, Input, OnInit } from "@angular/core";
import { Product } from "./product.model";

import { ProductService } from "./product.service";
import { TaxService } from "./tax.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "shopingcart";
  products: Product[];
  totalNumber: number = 0;

  promoCode: string = "";
  distCount: number = 0;
  subtotal: number = 1000000000;
  Tax: number = 10000000;
  Total: number = 110000000;
  numberItems: number = 1;

  constructor(
    public productServie: ProductService,
    public taxServie: TaxService
  ) {
    this.products = productServie.getProducts();
  }

  ngDoCheck() {
    this.tinhSoLuong();
    this.tinhTong();
  }

  tinhSoLuong() {
    let numberItems = 0;
    this.products.forEach(product => {
      numberItems += product.quantity;
    });
    this.totalNumber = numberItems;
  }

  handleChangeQuantity(p: Product) {
    this.productServie.handleChangeQuantity(p);
  }

  handleRemoveProduct(p: Product) {
    this.productServie.removeProduct(p.id);
  }

  inputQuantity(id: number, inputElement: HTMLInputElement) {
    console.log(id, inputElement, inputElement.value);
  }

  tinhTong() {
    let price = 0;

    this.products.forEach(product => {
      price += product.price * product.quantity;
    });

    this.subtotal = price;
    this.Tax = (price * 10) / 100;
    this.Total = price + this.Tax;
    this.Total = this.Total - this.distCount;
  }

  handlePromocode(promocode: string) {
    this.distCount = this.taxServie.getDistCountPromoCode(this.promoCode);
    console.log(this.distCount);
  }
}
