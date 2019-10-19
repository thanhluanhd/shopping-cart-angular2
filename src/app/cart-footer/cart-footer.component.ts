import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Product } from "../product.model";

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.css']
})


export class CartFooterComponent implements OnInit {

  promoCode:string;
  @Input() subtotal : number;
  @Input() Tax : number;
  @Input() Total : number;
  @Input() Discount : number;

  @Output() onApplyPromocode = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  applyPromoCode(){
    this.onApplyPromocode.emit(this.promoCode);
  }

}
