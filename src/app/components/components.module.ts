import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CInputComponent } from './generic/c-input/c-input.component';
import { CValidationComponent } from './generic/c-validation/c-validation.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CInputComponent, CValidationComponent, NavbarComponent],
  exports: [CInputComponent, CValidationComponent, NavbarComponent]
})
export class ComponentsModule { }
