import { VariableService } from "./../../shared/variable.service";
import { ContentService } from "./../../shared/content.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(private _contentService: ContentService) {}

  contentVariable = "";

  ngOnInit() {
    this._contentService.getDashboardContent().subscribe(
      (res) => {
        // console.log(res);
        this.contentVariable = res["data"][0].message;
        // console.log(res.data[0].message);
      },
      (error) => {
        // console.log(error);
        // console.log(error["error"].data[0].message);
        this.contentVariable = error["error"].data[0].message;
      }
    );
  }
}
