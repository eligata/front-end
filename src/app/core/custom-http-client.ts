import { Injectable } from '@angular/core'
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment'
import { Identity } from './identity';

@Injectable()
export class CustomHttpClient extends HttpClient {
    constructor(httpHandler: HttpHandler, private identity: Identity) {
        super(httpHandler);
    }

    get<T>(url: string): Observable<T> {
        return super.get<T>(environment.apiUrl + "/" + url, { headers: this.getHeaders() });
    }

    post<T>(url: string, body: any): Observable<T> {
        return super.post<T>(environment.apiUrl + "/" + url, body, { headers: this.getHeaders() });
    }

    put<T>(url: string, body: string): Observable<T> {
        return super.put<T>(environment.apiUrl + "/" + url, body, { headers: this.getHeaders() });
    }

    delete<T>(url: string): Observable<T> {
        return super.delete<T>(environment.apiUrl + "/" + url, { headers: this.getHeaders() });
    }

    private getHeaders() {
        return this.identity.get("token") != null ?
            new HttpHeaders({ "Authorization": "Bearer " + this.identity.get("token") }) :
            new HttpHeaders();
    }
}

export function httpClientProvider() {
    return {
        provide: HttpClient,
        useClass: CustomHttpClient
    }
}

// export class DefaultHttpClient extends HttpClient {
// }

// export function httpDefaultClientProvider() {
//     return {
//         provide: DefaultHttpClient,
//         useClass: HttpClient
//     }
// }