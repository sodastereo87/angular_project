import { Component, OnInit } from "@angular/core";
import * as data from "../../workers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Angular Example";

  products: any = (data as any).default;

  constructor() {}
  ngOnInit() {
    console.log(data);
  }
}
