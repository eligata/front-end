import { Injectable } from '@angular/core';
import { CustomHttpClient, Identity } from '../core';

@Injectable()
export class BasketService {

  constructor(private http: CustomHttpClient, private identity: Identity) {
  }

  load() {
    return this.http.get("api/basket/" + this.identity.get("id"));
  }

  addProductToBasket(productId: number, quantity: number) {
    return this.http.post("api/basket/addProduct", {
      userId: this.identity.get("id"),
      productId: productId,
      quantity: quantity
    });
  }

  updateProductQuantity(productId: number, basketId: number, quantity: number) {
    return this.http.post("api/basket/updateProductQty", {
      productId: productId,
      basketId: basketId,
      quantity: quantity
    });
  }

  removeProductFromBasket(productId: number, basketId: number) {
    return this.http.post("api/basket/removeProduct", {
      productId: productId,
      basketId: basketId
    });
  }

  purchaseBasket(basketId: number) {
    return this.http.post("api/basket/purchaseBasket", basketId
    );
  }

  discardBasket(basketId: number) {
    return this.http.delete("api/basket/" + basketId);
  }
}
