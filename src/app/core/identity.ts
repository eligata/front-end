import { Injectable } from '@angular/core'
import { JwtHelper } from 'angular2-jwt'

@Injectable()
export class Identity {
    id: string;
    email: string;
    token: string;

    setToken(token: string) {
        localStorage.setItem("userToken", token);
    }

    get(property: string) {
        let tokenObject = localStorage.getItem("userToken");
        
        if (tokenObject == null)
            return null;

        let jwtHelper = new JwtHelper();
        let decoded = jwtHelper.decodeToken(tokenObject);

        switch (property) {
            case "token": return tokenObject; 
            case "id": return decoded.nameid; 
            case "email": return decoded.sub; 
            default: return null;            
        }
    }

    invalidateToken() {
        localStorage.removeItem("userToken");
    }
}