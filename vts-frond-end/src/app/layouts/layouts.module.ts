import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TopbarComponent } from "./topbar/topbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { LayoutsComponent } from "./layouts.component";

@NgModule({
  declarations: [
    LayoutsComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}
