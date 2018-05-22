import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService, ToastrService } from '../../services';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styles: []
})
export class BasketItemComponent implements OnInit {
  @Input() basketItem: any;
  @Input() readOnly: boolean = false;

  canUpdateQty: boolean = false;
  initialQty: number;
  constructor(private router: Router, private basketService: BasketService, private toastr: ToastrService) { }

  ngOnInit() {
    this.initialQty = this.basketItem.quantity;
  }

  onChange(el: any) {
    this.canUpdateQty = this.basketItem.quantity != this.initialQty;
  }

  removeFromBasket(basketItem: any) {
    this.basketService.removeProductFromBasket(basketItem.productId, basketItem.basketId).subscribe(
      (resp: any) => {
        if (resp.succeded) {
          location.reload();
        } else {
          this.toastr.error(resp.message);
        }
      }
    );
  }

  updateProductQuantity(basketItem: any) {
    if (basketItem.quantity == 0) {
      this.toastr.warn("You can remove product from basket by clicking 'Remove from basket'!", "Warning");
      return;
    }

    this.basketService.updateProductQuantity(basketItem.productId, basketItem.basketId, basketItem.quantity).subscribe(
      (resp: any) => {
        if (resp.succeded) {
          location.reload();
        } else {
          this.toastr.error(resp.message);
        }
      }
    );
  }
}
