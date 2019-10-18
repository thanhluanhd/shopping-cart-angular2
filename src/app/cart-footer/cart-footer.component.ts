import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../product.model";

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.css']
})


export class CartFooterComponent implements OnInit {

  @Input() subtotal : number;
  @Input() Tax : number;
  @Input() Total : number;

  @Input() promoCode : string;
  
  constructor() { }

  ngOnInit() {
  }

  applyPromoCode(){
    console.log(this.promoCode);
  }

}
