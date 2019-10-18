import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.css']
})
export class CartFooterComponent implements OnInit {

  subtotal : number = 21.97;
  Tax : number = 2;
  Total : number = 26.97;
  
  constructor() { }

  ngOnInit() {
  }

}
