import { AuthModule } from "./auth/auth.module";
import { AuthRoutingModule } from "./auth/auth-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, AuthModule],
})
export class AccountModule {}
