import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { registerLocaleData } from "@angular/common";
import localeVi from "@angular/common/locales/vi";

registerLocaleData(localeVi, "vi");

import { AppComponent } from "./app.component";
import { CartHeaderComponent } from "./cart-header/cart-header.component";
import { CartContentComponent } from "./cart-content/cart-content.component";
import { CartFooterComponent } from "./cart-footer/cart-footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartContentComponent,
    CartFooterComponent
  ],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
