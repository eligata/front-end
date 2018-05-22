import { Component, OnInit, Input } from '@angular/core';
import { Identity } from '../../core';
import { Router } from '@angular/router';
import { BasketService, ToastrService } from '../../services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
  @Input() basketProduct: any;

  constructor(private identity: Identity, private router: Router, private basketService: BasketService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  addToBasket(product: any) {
    if (product.quantity <= 0) {
      this.toastr.warn("Please raise quantity of product!", "Warning");
      return;
    }

    // Add to basket
    this.basketService.addProductToBasket(product.productId, product.quantity).subscribe((resp: any) => {
      if (resp.succeded) {
        this.toastr.success(resp.message);
        this.router.navigate(['/basket'])
      } else {
        this.toastr.error(resp.message);
      }
    }, error => this.toastr.error(error.message));
  }
}
