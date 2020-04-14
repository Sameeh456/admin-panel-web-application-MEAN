import { Observable } from "rxjs";
import { ContentService } from "src/app/shared/content.service";
import { AuthData } from "./../model/auth-data.model";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpEvent,
} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _contentService: ContentService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this._contentService.getToken();
    req = req.clone({
      headers: new HttpHeaders({ Authorization: `Bearer ${authToken}` }),
    });
    // console.log("In interceptor", authToken);
    return next.handle(req);
  }
}
