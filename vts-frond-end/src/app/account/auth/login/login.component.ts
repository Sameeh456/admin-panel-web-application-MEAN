import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContentService } from "src/app/shared/content.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(public _contentService: ContentService) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    // console.log(form.value, "Login Form Value");
    if (form.invalid) {
      return;
    }
    this._contentService.loginUser(form.value.email, form.value.password);
  }
}
