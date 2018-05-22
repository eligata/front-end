import { Injectable } from '@angular/core'
import { Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanLoad, CanActivateChild } from '@angular/router'
import { Identity } from './identity';

@Injectable()
export class AuthorizeGuard implements CanActivate, CanLoad {

    constructor(private identity:Identity, private _router:Router){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.isAuthorized(route);
    }

    canLoad(route: Route): boolean {
        return this.isAuthorized(route);
    }

    private isAuthorized(route:Route | ActivatedRouteSnapshot):boolean {
        let isAuthorized= this.identity.get("token") != null;
        
        if(!isAuthorized){
            this._router.navigate(['/']);
        }
        return isAuthorized;
    }
}