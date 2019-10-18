import { Component, Input } from "@angular/core";
import { Product } from "./product.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "shopingcart";

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
    let desc = this.products.find(product => product.id === id).description;

    if (index !== -1) {
      this.products.splice(index, 1);
    }
    alert("Da xoa " + desc);
  }

  inputQuantity(id: number, inputElement: HTMLInputElement) {
    console.log(id, inputElement, inputElement.value);
  }

  subtotal : number = 21.97;
  Tax : number = 2;
  Total : number = 26.97;

  promoCode : string = ''
  
}
