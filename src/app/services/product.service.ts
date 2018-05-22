import { Injectable } from '@angular/core';
import { CustomHttpClient, Identity } from '../core';

@Injectable()
export class ProductService {

  constructor(private http: CustomHttpClient, private identity: Identity) {
  }

  loadProducts() {
    return this.http.get('api/product');
  }
}
