import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from './core';
import { LoginComponent } from './account';
import { ProductsComponent } from './products';
import { BasketComponent, PurchaseBasketComponent } from './basket';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'basket',
    canActivate: [AuthorizeGuard],
    component: BasketComponent
  },
  {
    path: 'purchasebasket',
    canActivate: [AuthorizeGuard],
    component: PurchaseBasketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
