import { Component, OnInit } from "@angular/core";
import { ContentService } from "src/app/shared/content.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  constructor(private _contentService: ContentService) {}

  contentVariable = "";

  ngOnInit() {
    this._contentService.getProductsContent().subscribe(
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
