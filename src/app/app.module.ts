import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components';
import { ComponentsModule } from './components/components.module';
import { AccountModule } from './account/account.module';
import { CustomHttpClient, AuthorizeGuard } from './core';
import { ServicesModule } from './services/services.module';
import { AccountService, ProductService, BasketService, ToastrService } from './services';
import { ProductsModule } from './products/products.module';
import { BasketModule } from './basket/basket.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AccountModule,
    ComponentsModule,
    ProductsModule,
    BasketModule
  ],
  providers: [
    CustomHttpClient,
    AuthorizeGuard,
    AccountService,
    ProductService,
    BasketService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
