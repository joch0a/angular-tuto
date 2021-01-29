import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts-component.component.html",
  styleUrls: ["./product-alerts-component.component.css"]
})
export class ProductAlertsComponentComponent implements OnInit {
  @Input() product;

  constructor() {}

  ngOnInit() {}
}
