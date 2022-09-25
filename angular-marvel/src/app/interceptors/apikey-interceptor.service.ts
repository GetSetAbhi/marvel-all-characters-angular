import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpParams,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let ts = Date.now();

        let publicKey = '6493ff23f4f9b467be44a6e02463fbdd';

        let privateKey = '3ff767aded2356837a8e64f5287084357fc25212';

        let hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

        let newParams = req.params ? req.params : new HttpParams();
        newParams = newParams
            .set('apikey', publicKey)
            .set('ts', ts)
            .set('hash', hash);
        let newReq = req.clone({ params: newParams });
        return next.handle(newReq);
    }
}