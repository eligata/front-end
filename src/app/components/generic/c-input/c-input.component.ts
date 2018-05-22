import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms'
import { CValidationComponent } from '../c-validation/c-validation.component';

@Component({
  selector: 'c-input',
  templateUrl: './c-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CInputComponent),
      multi: true
    }
  ]
})
export class CInputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() formControl: FormControl


  private _value: string;

  get value() {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    this.onChangeCallback(val);
  }

  constructor() {
  }

  writeValue(obj: any): void {
    if (obj != this._value) {
      this._value = obj;
      this.onChangeCallback(obj);
    }
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  onChangeCallback(value: string): void {
    // TO DO
  }

  onTouchedCallback(): void {
    // TO DO
  }

  onBlur() {
    this.onTouchedCallback();
  }
}
