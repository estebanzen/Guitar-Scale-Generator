import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-api-rest",
  templateUrl: "./api-rest.component.html",
  styleUrls: ["./api-rest.component.scss"]
})
export class ApiRestComponent implements OnInit {
  loadingData: boolean = false;
  showResults: boolean = false;

  urlLink = "https://jsonplaceholder.typicode.com/photos"; // URL example

  jsonObj = [];

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
    // alert(AppConfig.apiEndpoint);
  }
  onClickGetResults() {
    this.loadingData = true;
    this.showResults = true;
    this.jsonObj = [];

    let t = this;

    fetch(this.urlLink)
      .then(response => response.json())
      .then(json => {
        this.jsonObj = json;
      })
      .catch(function(error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
        t._snackBar.open(
          "Hubo un problema con la petición Fetch:" + error.message,
          "OK",
          {
            duration: 2000
          }
        );
      })
      .finally(function() {
        t.loadingData = false;
      });
  }
}
