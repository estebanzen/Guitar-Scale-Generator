import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-component-one",
  templateUrl: "./component-one.component.html",
  styleUrls: ["./component-one.component.scss"]
})
export class ComponentOneComponent implements OnInit {
  // value = "Clear me";
  name: string = "sssssss";
  // name: string = "";
  show: boolean = true;
  // show: boolean = false;

  public parentMessage = "parentMessage";

  constructor() {}

  ngOnInit() {}

  procesaPropagar(mensaje) {
    console.log("procesaPropagar()", mensaje);

    this.name = mensaje;
  }
}
