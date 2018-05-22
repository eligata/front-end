import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Identity } from '.';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    Identity
  ],
  declarations: []
})
export class CoreModule { }
