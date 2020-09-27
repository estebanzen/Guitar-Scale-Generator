import { Component, OnInit } from "@angular/core";
export interface TableElementInterface {
  theId: number;
  theType: string;
  name: string;
  value: number;
}

const TABLE_DATA: TableElementInterface[] = [
  { theId: 1, theType: "Tipo X", name: "Nombre 1", value: 10079 },
  { theId: 2, theType: "Tipo Y", name: "Nombre 2", value: 40026 },
  { theId: 3, theType: "Tipo X", name: "Nombre 3", value: 45540 },
  { theId: 4, theType: "Tipo Z", name: "Nombre 4", value: 90122 },
  { theId: 5, theType: "Tipo Y", name: "Nombre 5", value: 10811 },
  { theId: 6, theType: "Tipo X", name: "Nombre 6", value: 12107 },
  { theId: 7, theType: "Tipo X", name: "Nombre 7", value: 10067 },
  { theId: 8, theType: "Tipo Z", name: "Nombre 8", value: 15994 },
  { theId: 9, theType: "Tipo X", name: "Nombre 9", value: 18984 }
];
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ["theId", "name", "value", "theType"];
  dataSource = TABLE_DATA;

  constructor() {}

  ngOnInit() {}
}
