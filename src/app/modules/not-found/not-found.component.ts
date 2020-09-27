import { Component, OnInit } from "@angular/core";
import { AppConfig } from "../config/app.config";

// app.config.ts

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // alert(AppConfig.apiEndpoint);
  }
}
