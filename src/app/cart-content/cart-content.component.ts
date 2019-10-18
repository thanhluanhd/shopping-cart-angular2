import { Component, OnInit, Input } from "@angular/core";


import { from } from "rxjs";

@Component({
  selector: "app-cart-content",
  templateUrl: "./cart-content.component.html",
  styleUrls: ["./cart-content.component.css"]
})
export class CartContentComponent implements OnInit {
  
@Input() products;

  constructor() {}

  ngOnInit() {}
}
