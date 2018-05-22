import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BasketService, ToastrService } from '../../services';

@Component({
  selector: 'app-purchase-basket',
  templateUrl: './purchase-basket.component.html',
  styles: []
})
export class PurchaseBasketComponent implements OnInit {
  basket: Observable<any>;
  total: number = 0;
  constructor(private router: Router, private basketService: BasketService, private toastr: ToastrService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.basketService.load().subscribe(
      result => {
        this.basket = result as Observable<any>;
        this.recalculateTotal(result["productsInBasket"] as any[]);
      }, error => this.toastr.error(error.message)
    );
  }

  recalculateTotal(productsInBasket: any[]) {
    if (productsInBasket == null)
      return;

    for (var i = 0; i < productsInBasket.length; i++) {
      this.total += productsInBasket[i]["quantity"] * productsInBasket[i]["product"].price;
    }
  }

  purchaseBasket(basketId: number) {
    this.basketService.purchaseBasket(basketId).subscribe(
      (resp: any) => {
        if (resp.succeded) {
          this.toastr.success(resp.message);
          this.router.navigate(['/products']);
        } else {
          this.toastr.error(resp.message);
        }
      }
    )
  }

  continueShopping() {
    this.router.navigate(['/products'])
  }
}
