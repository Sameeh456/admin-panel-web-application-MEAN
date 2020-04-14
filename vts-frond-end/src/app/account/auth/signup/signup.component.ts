import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContentService } from "src/app/shared/content.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  constructor(public _contentService: ContentService) {}

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    // console.log(form.value, "Signup Form Value");
    if (form.invalid) {
      return;
    }
    this._contentService.createUser(form.value.email, form.value.password);
  }
}
