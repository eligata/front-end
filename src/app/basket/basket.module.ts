import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket/basket.component';
import { BasketItemComponent } from './basket-item/basket-item.component';
import { FormsModule } from '@angular/forms';
import { PurchaseBasketComponent } from './purchase-basket/purchase-basket.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BasketComponent, BasketItemComponent, PurchaseBasketComponent]
})
export class BasketModule { }
