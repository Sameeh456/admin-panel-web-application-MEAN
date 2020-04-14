import { StoreComponent } from "./store/store.component";
import { SalesReportComponent } from "./sales-report/sales-report.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },

  { path: "products", component: ProductsComponent },

  { path: "sales", component: SalesReportComponent },

  { path: "store", component: StoreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
