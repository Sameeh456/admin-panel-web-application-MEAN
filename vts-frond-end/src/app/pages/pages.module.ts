import { StoreComponent } from "./store/store.component";
import { SalesReportComponent } from "./sales-report/sales-report.component";
import { ProductsComponent } from "./products/products.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesRoutingModule } from "./pages-routing.module";

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    SalesReportComponent,
    StoreComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
