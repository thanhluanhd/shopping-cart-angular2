import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {

  numberItems : number = 8;
  constructor() { }

  ngOnInit() {
  }

}
