import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, ToastrService } from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private accountService: AccountService, private toastr: ToastrService) {
    this.registerForm = formBuilder.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  ngOnInit() {
  }

  register(registerModel) {
    this.accountService.register(registerModel).subscribe((resp: any) => {
      if (resp.succeded) {
        this.toastr.success(resp.message);
        this.router.navigate(['/'])
      }
      else
        this.toastr.error(resp.message);
    }, error => this.toastr.error(error.error));
  }
}
