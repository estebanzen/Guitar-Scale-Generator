import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-component-two",
  templateUrl: "./component-two.component.html",
  styleUrls: ["./component-two.component.scss"]
})
export class ComponentTwoComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  mensaje: string;

  @Input() textToShow: string;
  @Output()
  propagar = new EventEmitter<string>();
  messageValue: string;

  ngOnInit() {
    this._snackBar.open("Nuevo componente habilitado", "OK", {
      duration: 2000
    });
  }

  botonClick() {
    this.propagar.emit("Este dato viajará hacia el padre");
  }
  onPropagar() {
    console.log("onPropagar()", this.mensaje);
    this.propagar.emit(this.mensaje);
    // this.propagar.emit("Este dato viajará hacia el padre");
  }
}
