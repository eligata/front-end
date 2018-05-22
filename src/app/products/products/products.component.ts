import { Component, OnInit } from '@angular/core';
import { ProductService, ToastrService } from '../../services';
import { Observable } from 'rxjs/Observable';
import { Identity } from '../../core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  products: Observable<any[]>;

  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.loadProducts().subscribe(
      result => {
        this.products = result as Observable<any[]>;
      },
      error => {
        this.toastr.error(error.error);
      }
    );
  }

}
