import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Identity } from '../../core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  constructor(private identity: Identity, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.identity.invalidateToken();
    this.router.navigate(['/'])
  }
}
