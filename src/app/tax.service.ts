import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TaxService {
  constructor() {}

  getDistCountPromoCode(promoCode: string): number {
    if (promoCode === "muathu") {
      return 1000;
    } else {
      return 2000;
    }
  }
}
