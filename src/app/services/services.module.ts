import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService, ProductService, BasketService, ToastrService } from '.';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    AccountService,
    ProductService,
    BasketService,
    ToastrService
  ]
})
export class ServicesModule { }
