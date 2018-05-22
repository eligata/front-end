import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CBase } from '../c-base';


@Component({
  selector: 'c-validation',
  templateUrl: './c-validation.component.html'
})
export class CValidationComponent extends CBase {
  @Input() validationSubject: FormControl

  constructor() {
    super();
  }
}
