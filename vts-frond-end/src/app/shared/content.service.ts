import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { VariableService } from "./variable.service";
import { Injectable } from "@angular/core";
import { AuthData } from "../model/auth-data.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ContentService {
  private token: string;
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();

  constructor(
    private _variableService: VariableService,
    private http: HttpClient,
    private router: Router
  ) {}

  getDashboardContent() {
    this._variableService.heading = "Dashboard";
    return this.http.get(`${environment.apiUrl}pages/Dashboard`);
  }

  getProductsContent() {
    this._variableService.heading = "Products";
    return this.http.get(`${environment.apiUrl}pages/products`);
  }

  getStoreContent() {
    this._variableService.heading = "Store";
    return this.http.get(`${environment.apiUrl}pages/store`);
  }

  getSalesContent() {
    this._variableService.heading = "Sales";
    return this.http.get(`${environment.apiUrl}pages/sales`);
  }

  createUser(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    return this.http
      .put(`${environment.apiUrl}signup`, authData)
      .subscribe((res) => {
        console.log(res);
      });
  }

  loginUser(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    return this.http
      .post<{ token: string }>(`${environment.apiUrl}login`, authData)
      .subscribe((res) => {
        console.log(res);
        const token = res.token;
        this.token = token;
        if (token) {
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          this.router.navigate(["/pages/store"]);
        }
      });
  }

  getToken() {
    return this.token;
  }

  getisAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  logoutUser() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(["/login"]);
  }
}
