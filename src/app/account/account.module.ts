import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { AccountService } from '../services';
import { LoginComponent, RegisterComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers: [
    AccountService
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AccountModule { }
