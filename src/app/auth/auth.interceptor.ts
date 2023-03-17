import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { UserAuthService } from "../services/user-auth.service";
@Injectable({
    providedIn: 'root',
  })
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth : UserAuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get("No-Auth")==="true"){
            return next.handle(req.clone());
        }
        
        const token = this.auth.getToken();
        this.addToken(req,token);
        
        return next.handle(req).pipe();

    }
    private addToken(request: HttpRequest<any>, token: string) {
        
        if (!token.startsWith('Bearer ')) {
            token = 'Bearer ' + token;
            
        }
        return request.clone({
            setHeaders: {
                Authorization: token
            }
        });
    }
    


    }
    
