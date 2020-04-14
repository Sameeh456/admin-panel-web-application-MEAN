import { AuthGaurd } from "./shared/auth-gaurd";
import { LayoutsComponent } from "./layouts/layouts.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule),
  },

  {
    path: "pages",
    component: LayoutsComponent,
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
    canActivate: [AuthGaurd],
  },

  {
    path: "",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule],
  providers: [AuthGaurd],
})
export class AppRoutingModule {}
