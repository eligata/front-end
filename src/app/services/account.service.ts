import { Injectable } from '@angular/core';
import { CustomHttpClient, Identity } from '../core';

@Injectable()
export class AccountService {

  constructor(private http: CustomHttpClient, private identity: Identity) {
  }

  login(loginModel) {
    return this.http.post('api/account/login', {
      Email: loginModel.email,
      Password: loginModel.password
    });
  }

  register(registerModel) {
    return this.http.post('api/account/register', {
      Email: registerModel.email,
      Password: registerModel.password,
      ConfirmPassword: registerModel.password
    });
  }

}
