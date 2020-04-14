import { ContentService } from "src/app/shared/content.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { VariableService } from "src/app/shared/variable.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"],
})
export class TopbarComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;

  constructor(
    public _variableService: VariableService,
    private _contentService: ContentService
  ) {}

  // heading = this._variableService.heading;

  ngOnInit() {
    this.authListenerSubs = this._contentService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onLogout() {
    this._contentService.logoutUser();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
