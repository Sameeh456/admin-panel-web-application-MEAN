import { Component, OnInit } from "@angular/core";
import { ContentService } from "src/app/shared/content.service";

@Component({
  selector: "app-sales-report",
  templateUrl: "./sales-report.component.html",
  styleUrls: ["./sales-report.component.css"],
})
export class SalesReportComponent implements OnInit {
  constructor(private _contentService: ContentService) {}

  contentVariable = "";

  ngOnInit() {
    this._contentService.getSalesContent().subscribe(
      (res) => {
        this.contentVariable = res["data"][0].message;
      },
      (error) => {
        // console.log(error);
        // console.log(error["error"].data[0].message);
        this.contentVariable = error["error"].data[0].message;
      }
    );
  }
}
