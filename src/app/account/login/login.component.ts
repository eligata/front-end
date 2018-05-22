import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, ToastrService } from '../../services';
import { Identity } from '../../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private identity: Identity, private accountService: AccountService, private toastr: ToastrService) {
    this.loginForm = formBuilder.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {
  }

  login(loginModel) {
    this.accountService.login(loginModel).subscribe((resp: any) => {
      let tokenObj = JSON.parse(resp);
      this.identity.setToken(tokenObj.auth_token);
      this.router.navigate(['/products'])
    },
      error => {
        this.toastr.error(error.error);
      });
  }
}