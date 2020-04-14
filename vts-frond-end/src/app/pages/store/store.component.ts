import { Component, OnInit } from "@angular/core";
import { ContentService } from "src/app/shared/content.service";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent implements OnInit {
  constructor(private _contentService: ContentService) {}

  contentVariable = "";

  ngOnInit() {
    this._contentService.getStoreContent().subscribe((res) => {
      this.contentVariable = res["data"][0].message;
    });
  }
}
