(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"container\">\r\n  <!-- [(opened)]=\"opened\" -->\r\n  <mat-sidenav #sidenav\r\n               [(mode)]=\"over\">\r\n    <app-header [textToShow]=\"menus\"></app-header>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\"\r\n                 class=\"header-box-shadow\">\r\n      <span>GUITAR TOOLS</span>\r\n\r\n      <span class=\"navigation-spacer\"></span>\r\n\r\n      <button class=\"navigation-items\"\r\n              *ngFor=\"let item of menus\"\r\n              mat-button\r\n              routerLink=\"{{ item.link }}\">\r\n        <mat-icon class=\"mr-1\"> {{ item.icon }}</mat-icon>\r\n        {{ item.title }}\r\n      </button>\r\n\r\n      <button class=\"navigation-icon\"\r\n              mat-icon-button\r\n              (click)=\"sidenav.toggle()\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n    </mat-toolbar>\r\n\r\n    <div class=\"main-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <app-footer></app-footer>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/guitar/guitar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/guitar/guitar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"guitar-neck\">\r\n\r\n\t<div class=\"fret first\"></div>\r\n\t<div class=\"fret\"></div>\r\n\t<div class=\"fret\"></div>\r\n\t<div class=\"fret\"></div>\r\n\t<div class=\"fret\"></div>\r\n\t<div class=\"fret\"></div>\r\n\t<div class=\"fret\"></div>\r\n\t<div class=\"fret\"></div>\r\n\t<div class=\"fret\"></div>\r\n\t<div class=\"fret\"></div>\r\n\t<div class=\"fret\"></div>\r\n\t<div class=\"fret\"></div>\r\n\t<div class=\"fret\"></div>\r\n\r\n\t<ul class=\"strings\">\r\n\t\t<li></li>\r\n\t\t<li></li>\r\n\t\t<li></li>\r\n\t\t<li></li>\r\n\t\t<li></li>\r\n\t\t<li></li>\r\n\t</ul>\r\n\r\n\t<ul class=\"open-notes\">\r\n\t\t<li class=\"low-e\">E</li>\r\n\t\t<li class=\"b\">B</li>\r\n\t\t<li class=\"g\">G</li>\r\n\t\t<li class=\"d\">D</li>\r\n\t\t<li class=\"a\">A</li>\r\n\t\t<li class=\"high-e\">E</li>\r\n\t</ul>\r\n\t<div class=\"notes\">\r\n\t\t<div class=\"mask low-e\">\r\n\t\t\t<ul></ul>\r\n\t\t</div>\r\n\t\t<div class=\"mask a\">\r\n\t\t\t<ul></ul>\r\n\t\t</div>\r\n\t\t<div class=\"mask d\">\r\n\t\t\t<ul></ul>\r\n\t\t</div>\r\n\t\t<div class=\"mask g\">\r\n\t\t\t<ul></ul>\r\n\t\t</div>\r\n\t\t<div class=\"mask b\">\r\n\t\t\t<ul></ul>\r\n\t\t</div>\r\n\t\t<div class=\"mask high-e\">\r\n\t\t\t<ul></ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/piano/piano.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/piano/piano.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"set\">\r\n\t<li class=\"white b\"></li>\r\n\t<li class=\"black as\"></li>\r\n\t<li class=\"white a\"></li>\r\n\t<li class=\"black gs\"></li>\r\n\t<li class=\"white g\"></li>\r\n\t<li class=\"black fs\"></li>\r\n\t<li class=\"white f\"></li>\r\n\t<li class=\"white e\"></li>\r\n\t<li class=\"black ds\"></li>\r\n\t<li class=\"white d\"></li>\r\n\t<li class=\"black cs\"></li>\r\n\t<li class=\"white c\"></li>\r\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/scales/scales.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/scales/scales.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-container\">\r\n  <mat-card class=\"the-card\">\r\n\r\n    <mat-card class=\"section-options\">\r\n      <mat-card-content>\r\n        <section>\r\n          <mat-slide-toggle [(ngModel)]=\"showOptions\"\r\n                            class=\"example-margin\">\r\n            SCALE\r\n          </mat-slide-toggle>\r\n\r\n          <mat-slide-toggle [(ngModel)]=\"showGuitar\"\r\n                            class=\"example-margin\"\r\n                            [color]=\"sliderColor\">\r\n            GUITAR\r\n          </mat-slide-toggle>\r\n\r\n          <mat-slide-toggle [(ngModel)]=\"showPiano\"\r\n                            class=\"example-margin\"\r\n                            [color]=\"sliderColor\">\r\n            PIANO\r\n          </mat-slide-toggle>\r\n        </section>\r\n      </mat-card-content>\r\n\r\n      <section *ngIf=\"showOptions\">\r\n\r\n        <mat-accordion>\r\n\r\n          <mat-expansion-panel>\r\n            <!-- ROOT NOTE -->\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title style=\"width: 10%;\">\r\n                NOTE ROOT\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                CURRENTLY: <b *ngIf=\"noteRootValue != undefined\"> {{notes[noteRootValue].noteStr}}</b>\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n\r\n            <div class=\"example-ripple-container\">\r\n              <div *ngFor=\"let note of notes;let i=index;\"\r\n                   class=\"example-ripple mat-elevation-z1\"\r\n                   matRipple\r\n                   (click)=\"onClickNoteRoot(note,i)\"\r\n                   [ngClass]=\"{'active mat-elevation-z7' : note.root}\">\r\n                {{note.noteStr}}\r\n              </div>\r\n            </div>\r\n            <!-- ROOT NOTE -->\r\n          </mat-expansion-panel>\r\n\r\n          <mat-expansion-panel>\r\n\r\n            <!-- SCALE -->\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title style=\"width: 10%;\">\r\n                SCALES\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                SCALE NOTES\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n\r\n            <div class=\"example-ripple-container\">\r\n              <div *ngFor=\"let note of notes\"\r\n                   class=\"example-ripple mat-elevation-z1\"\r\n                   matRipple\r\n                   (click)=\"onClickNote(note)\"\r\n                   [ngClass]=\"{'active mat-elevation-z7' : note.active}\">\r\n                {{note.noteStr}}\r\n              </div>\r\n            </div>\r\n            <!-- SCALE -->\r\n\r\n          </mat-expansion-panel>\r\n\r\n        </mat-accordion>\r\n        <!-- /GUITAR OPTIONS -->\r\n\r\n      </section>\r\n    </mat-card>\r\n\r\n    <br>\r\n\r\n\r\n    <mat-card *ngIf=\"showGuitar\">\r\n\r\n      <div style=\"height: 40px;\">\r\n\r\n        <section class=\"mat-typography\"\r\n                 style=\"float: left;\">\r\n          <h2>GUITAR</h2>\r\n        </section>\r\n        <button (click)=\"showGuitarOptions= (!showGuitarOptions)\"\r\n                mat-icon-button\r\n                style=\"float: right; margin: -5px;\">\r\n          <mat-icon>settings</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n      <!-- GUITAR OPTIONS -->\r\n      <mat-card *ngIf=\"showGuitarOptions\"\r\n                style=\"\r\n\t\t\tmargin-bottom: 10px;\r\n\t\t\">\r\n\r\n        <section class=\"mat-typography\">\r\n          <h4>GUITAR OPTIONS</h4>\r\n        </section>\r\n\r\n        <mat-accordion>\r\n\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title style=\"width: 10%;\">\r\n                FRETS AMOUNT\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                CURRENTLY: <b>{{cantidadTrastes}}</b>\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n\r\n            <mat-card>\r\n              <mat-form-field class=\"form-elements\"\r\n                              style=\"width: 40px; margin-right: 4px;\">\r\n                <input class=\"form-elements\"\r\n                       [(ngModel)]=\"cantidadTrastes\"\r\n                       type=\"number\"\r\n                       matInput\r\n                       placeholder=\"Cant. Trastes\" />\r\n              </mat-form-field>\r\n\r\n              <mat-slider min=\"5\"\r\n                          max=\"25\"\r\n                          step=\"1\"\r\n                          [(ngModel)]=\"cantidadTrastes\"\r\n                          value=\"15\"></mat-slider>\r\n\r\n              <button [disabled]=\"!cantidadTrastes\"\r\n                      mat-raised-button\r\n                      (click)=\"diapasonConstructor()\"\r\n                      color=\"primary\"\r\n                      class=\"btn\">\r\n                <mat-icon>send</mat-icon>\r\n                Update\r\n              </button>\r\n            </mat-card>\r\n\r\n          </mat-expansion-panel>\r\n\r\n\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title style=\"width: 10%;\">\r\n                STRINGS\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                CURRENTLY\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n\r\n            <mat-card>\r\n              <mat-form-field *ngFor=\"let cuerda of cuerdas; let i = index\"\r\n                              style=\"width: 40px; margin-right: 4px;\">\r\n                <mat-label>Str. {{i+1}}</mat-label>\r\n                <mat-select [(ngModel)]=\"cuerda\"\r\n                            (selectionChange)=\"cuerdas[i] = cuerda\">\r\n                  <mat-option *ngFor=\"let note of notes\"\r\n                              [value]=\"note.noteStr\">\r\n                    {{note.noteStr}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n\r\n              <br>\r\n              <button mat-raised-button\r\n                      (click)=\"onClickAddString()\"\r\n                      color=\"primary\"\r\n                      style=\"margin-right: 15px;\"\r\n                      class=\"btn\">\r\n                <mat-icon>add</mat-icon>\r\n                ADD\r\n              </button>\r\n\r\n              <button mat-raised-button\r\n                      (click)=\"onClickDeleteString()\"\r\n                      color=\"primary\"\r\n                      style=\"margin-right: 15px;\"\r\n                      class=\"btn\">\r\n                <mat-icon>delete</mat-icon>\r\n                DEL\r\n              </button>\r\n\r\n              <button [disabled]=\"!cantidadTrastes\"\r\n                      mat-raised-button\r\n                      (click)=\"diapasonConstructor()\"\r\n                      color=\"primary\"\r\n                      style=\"margin-right: 15px;\"\r\n                      class=\"btn\">\r\n                <mat-icon>send</mat-icon>\r\n                UPDATE\r\n              </button>\r\n\r\n            </mat-card>\r\n\r\n          </mat-expansion-panel>\r\n\r\n\r\n        </mat-accordion>\r\n\r\n      </mat-card>\r\n      <!-- /guitar options -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <!-- <img src=\"assets/img/rosewood.jpg\"> -->\r\n      <div class=\"guitar-container\">\r\n        <table class=\"guitar\">\r\n          <tr class=\"trastes-numeros\">\r\n            <td *ngFor=\"let trastes of cantidadTrastesArr\">\r\n              <span>{{trastes}}</span>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let diap of diapason\"\r\n              class=\"string\">\r\n\r\n            <!--\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t'active' : d.active,\r\n\t\t\t\t\t\t\t\t'active tonic' : d.root && d.active\r\n\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t-->\r\n\r\n            <td *ngFor=\"let d of diap\"\r\n                [ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t'tonic': d.root && d.active,\r\n\t\t\t\t\t\t\t\t\t'active': d.active\r\n\t\t\t\t\t\t\t\t}\"\r\n                (click)=\"onClickNote(d)\">\r\n              <span>{{d.noteStr}}</span>\r\n              <!-- <span>{{d|json}}</span> -->\r\n            </td>\r\n          </tr>\r\n\r\n          <tr class=\"trastes-puntitos\">\r\n            <td *ngFor=\"let trastes of cantidadTrastesArr\"\r\n                [ngClass]=\"\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t'two': renderPuntitosGuitarClassCss(trastes)===2,\r\n\t\t\t\t\t\t\t\t'one': renderPuntitosGuitarClassCss(trastes)===1\r\n\t\t\t\t\t\t\t}\">\r\n              <span></span>\r\n            </td>\r\n          </tr>\r\n\r\n        </table>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <br *ngIf=\"showGuitar\">\r\n\r\n    <mat-card *ngIf=\"showPiano\">\r\n\r\n      <div style=\"height: 40px;\">\r\n        <section class=\"mat-typography\"\r\n                 style=\"float: left;\">\r\n          <h2>\r\n            PIANO\r\n          </h2>\r\n        </section>\r\n\r\n        <button (click)=\"showPianoOptions= (!showPianoOptions)\"\r\n                mat-icon-button\r\n                style=\"float: right; margin: -5px;\">\r\n          <mat-icon>settings</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <!-- piano options -->\r\n      <mat-card *ngIf=\"showPianoOptions\">\r\n\r\n        <section class=\"mat-typography\">\r\n          <h4> PIANO OPTIONS</h4>\r\n        </section>\r\n        <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title style=\"width: 10%;\">\r\n                AMOUNT OF PIANO KEYS\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                CURRENTLY: <b>{{pianoCantidadTeclas}}</b>\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n\r\n            <mat-card>\r\n              <mat-form-field class=\"form-elements\"\r\n                              style=\"width: 40px; margin-right: 4px;\">\r\n                <input class=\"form-elements\"\r\n                       [(ngModel)]=\"pianoCantidadTeclas\"\r\n                       type=\"number\"\r\n                       matInput\r\n                       readonly\r\n                       placeholder=\"Cant. Trastes\" />\r\n              </mat-form-field>\r\n\r\n              <mat-slider min=\"12\"\r\n                          max=\"36\"\r\n                          step=\"1\"\r\n                          (change)=\"pianoConstructor()\"\r\n                          [(ngModel)]=\"pianoCantidadTeclas\"></mat-slider>\r\n\r\n            </mat-card>\r\n          </mat-expansion-panel>\r\n\r\n        </mat-accordion>\r\n\r\n      </mat-card>\r\n      <!-- /piano options -->\r\n\r\n      <br *ngIf=\"showPianoOptions\">\r\n\r\n      <div class=\"piano-container\">\r\n        <table class=\"piano\">\r\n          <tr class=\"\">\r\n            <td *ngFor=\"let nn of pianoTeclas\"\r\n                class={{nn.classes}}\r\n                [ngClass]=\"{\r\n\t\t\t\t\t\t\t\t'tonic': nn.root && nn.active,\r\n\t\t\t\t\t\t\t\t'active': nn.active\r\n\t\t\t\t\t\t\t}\"\r\n                (click)=\"onClickNote(nn)\">\r\n              <span>{{nn.noteStr}}</span>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <!--\r\n\t\t<mat-card>\r\n\t\t\t<app-guitar></app-guitar>\r\n\t\t</mat-card>\r\n\r\n\t\t<br>\r\n\r\n\t\t<mat-card>\r\n\t\t\t<app-piano></app-piano>\r\n\t\t</mat-card>\r\n\t\t-->\r\n\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/api-rest/api-rest.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/api-rest/api-rest.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-container\">\r\n  <mat-card class=\"the-card\">\r\n    <section class=\"mat-typography\">\r\n      <h1>3er componente:</h1>\r\n\r\n      <p>\r\n        Debe mostrar una pantalla de consulta, donde mediante una búsqueda de un\r\n        input text, llamando a un servicio consulte a una API REST y muestre los\r\n        resultados en pantalla.\r\n      </p>\r\n      <p>\r\n        Como API REST se puede usar cualquiera de las siguientes que son libres:\r\n      </p>\r\n\r\n      <ul>\r\n        <li>\r\n          <a target=\"_blank\" href=\"https://domainsdb.info/\">\r\n            https://domainsdb.info/\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a target=\"_blank\" href=\"https://jsonplaceholder.typicode.com/\">\r\n            https://jsonplaceholder.typicode.com/\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a target=\"_blank\" href=\"https://github.com/public-apis/public-apis\">\r\n            https://github.com/public-apis/public-apis\r\n          </a>\r\n        </li>\r\n        <li>\r\n          Si esas apis dan CORS se puede hacer un proxy/wrapper interno que\r\n          redirija sin dar error o usar un json local o usar otra api.\r\n        </li>\r\n      </ul>\r\n    </section>\r\n    <mat-card>\r\n      <mat-form-field class=\"form-elements\">\r\n        <input\r\n          class=\"form-elements\"\r\n          [(ngModel)]=\"urlLink\"\r\n          matInput\r\n          placeholder=\"Ingrese la URI de la API\"\r\n        />\r\n      </mat-form-field>\r\n\r\n      <button\r\n        [disabled]=\"!urlLink\"\r\n        mat-raised-button\r\n        (click)=\"onClickGetResults()\"\r\n        color=\"primary\"\r\n        class=\"btn\"\r\n      >\r\n        <mat-icon>send</mat-icon>\r\n        Obtener resultados\r\n      </button>\r\n    </mat-card>\r\n\r\n    <br />\r\n\r\n    <mat-card>\r\n      <section class=\"mat-typography\">\r\n        <h4>Ejemplos</h4>\r\n      </section>\r\n\r\n      <div class=\"example-button-row\">\r\n        <button\r\n          mat-raised-button\r\n          (click)=\"\r\n            urlLink = 'https://jsonplaceholder.typicode.com/posts';\r\n            onClickGetResults()\r\n          \"\r\n        >\r\n          posts\r\n        </button>\r\n        <button\r\n          mat-raised-button\r\n          (click)=\"\r\n            urlLink = 'https://jsonplaceholder.typicode.com/comments';\r\n            onClickGetResults()\r\n          \"\r\n        >\r\n          comments\r\n        </button>\r\n        <button\r\n          mat-raised-button\r\n          (click)=\"\r\n            urlLink = 'https://jsonplaceholder.typicode.com/albums';\r\n            onClickGetResults()\r\n          \"\r\n        >\r\n          albums\r\n        </button>\r\n        <button\r\n          mat-raised-button\r\n          (click)=\"\r\n            urlLink = 'https://jsonplaceholder.typicode.com/photos';\r\n            onClickGetResults()\r\n          \"\r\n        >\r\n          photos\r\n        </button>\r\n        <button\r\n          mat-raised-button\r\n          (click)=\"\r\n            urlLink = 'https://jsonplaceholder.typicode.com/users';\r\n            onClickGetResults()\r\n          \"\r\n        >\r\n          users\r\n        </button>\r\n        <button\r\n          mat-raised-button\r\n          (click)=\"\r\n            urlLink = 'https://jsonplaceholder.typicode.com/todos';\r\n            onClickGetResults()\r\n          \"\r\n        >\r\n          todos\r\n        </button>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <br />\r\n\r\n    <mat-card *ngIf=\"showResults\">\r\n      <mat-progress-bar *ngIf=\"loadingData\" mode=\"query\"></mat-progress-bar>\r\n      <p>\r\n        Cant. de Resultados:\r\n        <b> {{ jsonObj.length }}</b>\r\n      </p>\r\n\r\n      <mat-card class=\"cards-result\" *ngFor=\"let item of jsonObj\">\r\n        <pre>{{ item | json }}</pre>\r\n      </mat-card>\r\n    </mat-card>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/component-one/component-one.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/component-one/component-one.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-container\">\r\n  <mat-card class=\"example-form\">\r\n    <section class=\"mat-typography\">\r\n      <h1>1er componente:</h1>\r\n      <p>\r\n        Debe mostrar un input tipo texto y un botón, que al hacer clic en ese\r\n        botón muestre el texto en otro div que contiene otro componente, solo\r\n        para mostrar ese texto (a libre elección, puede ser un saludo o lo que\r\n        se desee)\r\n      </p>\r\n    </section>\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <textarea\r\n        [(ngModel)]=\"name\"\r\n        matInput\r\n        placeholder=\"Ingrese un texto cualquiera...\"\r\n      ></textarea>\r\n      <!-- <input [(ngModel)]=\"title\" type=\"text\" /> -->\r\n    </mat-form-field>\r\n\r\n    <button\r\n      (click)=\"show = true\"\r\n      [disabled]=\"!name\"\r\n      mat-raised-button\r\n      *ngIf=\"!show\"\r\n      color=\"primary\"\r\n      class=\"btn first-button\"\r\n    >\r\n      <mat-icon>send</mat-icon>\r\n      Mostrar segundo componente\r\n    </button>\r\n\r\n    <button\r\n      mat-stroked-button\r\n      color=\"primary\"\r\n      class=\"btn\"\r\n      mat-button\r\n      *ngIf=\"name\"\r\n      (click)=\"name = ''; show = false\"\r\n    >\r\n      <mat-icon>close</mat-icon>\r\n      Resetear Formulario\r\n    </button>\r\n  </mat-card>\r\n</div>\r\n\r\n<!-- <app-component-two *ngIf=\"show\" [textToShow]=\"name\"></app-component-two> -->\r\n<app-component-two\r\n  [textToShow]=\"name\"\r\n  (propagar)=\"procesaPropagar($event)\"\r\n></app-component-two>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/component-two/component-two.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/component-two/component-two.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-container\">\r\n  <mat-card class=\"the-card\">\r\n    <h2 class=\"mat-h2\">Este es otro componente</h2>\r\n    <p>Texto a mostrar: {{ textToShow }}</p>\r\n    <textarea\r\n      matInput\r\n      type=\"text\"\r\n      [(ngModel)]=\"mensaje\"\r\n      (keyup)=\"onPropagar()\"\r\n      placeholder=\"Ingrese un texto cualquiera...\"\r\n    ></textarea>\r\n\r\n    <button\r\n      mat-stroked-button\r\n      class=\"btn\"\r\n      mat-button\r\n      color=\"primary\"\r\n      (click)=\"onPropagar()\"\r\n    >\r\n      Propagar\r\n    </button>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/drag-and-drop-test/drag-and-drop-test.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/drag-and-drop-test/drag-and-drop-test.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>\r\n    <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\r\n    {{ movie }}\r\n  </div>\r\n</div>\r\n<div class=\"example-box-2\" cdkDrag>\r\n  Drag me around\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\"\r\n             class=\"footer-container\">\r\n  <a mat-button\r\n     routerLink=\".\">Inicio</a>\r\n  <a mat-button\r\n     target=\"_blank\"\r\n     href=\"https://material.angular.io/components/categories\">\r\n    Material Angular\r\n  </a>\r\n  <a mat-button\r\n     target=\"_blank\"\r\n     href=\"https://github.com/estebanzen/guitar-scale-generator\">GitHub Repository\r\n  </a>\r\n  <a mat-button\r\n     target=\"_blank\"\r\n     href=\"https://www.linkedin.com/in/estebanzen/\">Linkedin @EstebanZenzerovich\r\n  </a>\r\n</mat-toolbar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\r\n  <button\r\n    class=\"item\"\r\n    *ngFor=\"let item of textToShow\"\r\n    mat-button\r\n    routerLink=\"{{ item.link }}\"\r\n  >\r\n    <mat-icon class=\"mr-1\"> {{ item.icon }}</mat-icon>\r\n    {{ item.title }}\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-component-one></app-component-one>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/not-found/not-found.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/not-found/not-found.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>not-found works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/table/table.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/table/table.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-container\">\r\n  <mat-card class=\"the-card\">\r\n    <section class=\"mat-typography\">\r\n      <h1>2do componente:</h1>\r\n\r\n      <p>\r\n        Debe mostrar una tabla con el contenido de un objeto que contenga ID,\r\n        Name, Type, Value (los valores los elige el que realiza el código).\r\n      </p>\r\n    </section>\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n      <!--- Note that these columns can be defined in any order.\r\n\t\t\t  The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n      <!-- Id Column -->\r\n      <ng-container matColumnDef=\"theId\">\r\n        <th mat-header-cell *matHeaderCellDef>Id.</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.theId }}</td>\r\n      </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef>Name</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\r\n      </ng-container>\r\n\r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"theType\">\r\n        <th mat-header-cell *matHeaderCellDef>Type</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.theType }}</td>\r\n      </ng-container>\r\n\r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"value\">\r\n        <th mat-header-cell *matHeaderCellDef>Value</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.value }}</td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n    </table>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/not-found/not-found.component */ "./src/app/modules/not-found/not-found.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_api_rest_api_rest_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/api-rest/api-rest.component */ "./src/app/modules/api-rest/api-rest.component.ts");
/* harmony import */ var _modules_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/table/table.component */ "./src/app/modules/table/table.component.ts");
/* harmony import */ var _modules_drag_and_drop_test_drag_and_drop_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/drag-and-drop-test/drag-and-drop-test.component */ "./src/app/modules/drag-and-drop-test/drag-and-drop-test.component.ts");
/* harmony import */ var _components_scales_scales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/scales/scales.component */ "./src/app/components/scales/scales.component.ts");









// import { DragAndDropTestComponent } from "./drag-and-drop-test/drag-and-drop-test.component";
// const routes: Routes = [];
const routes = [
    {
        path: "",
        component: _components_scales_scales_component__WEBPACK_IMPORTED_MODULE_8__["ScalesComponent"]
    }, {
        path: "home",
        component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: "rest",
        component: _modules_api_rest_api_rest_component__WEBPACK_IMPORTED_MODULE_5__["ApiRestComponent"]
    },
    {
        path: "table",
        component: _modules_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]
    },
    {
        path: "drag-and-drop",
        component: _modules_drag_and_drop_test_drag_and_drop_test_component__WEBPACK_IMPORTED_MODULE_7__["DragAndDropTestComponent"]
    },
    {
        path: "not-found",
        component: _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    },
    {
        path: "**",
        redirectTo: "not-found"
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  height: 100%;\n  min-height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.main-content {\n  min-height: 500px;\n}\n\n.navigation-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.navigation-icon {\n  padding: 0 14px;\n}\n\n.navigation-icon {\n  display: none;\n}\n\n@media only screen and (max-width: 600px) {\n  .navigation-icon {\n    display: block;\n  }\n\n  .navigation-items {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxFemVub1xcT25lRHJpdmVcXERvY3VtZW50b3NcXERlc2Fycm9sbG9zXFxnaXRodWJcXEd1aXRhci1TY2FsZS1HZW5lcmF0b3Ivc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO1VBQUEsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBRUk7SUFDSSxjQUFBO0VDQU47O0VER0U7SUFDSSxhQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm5hdmlnYXRpb24taWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAgIC5uYXZpZ2F0aW9uLWljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uLWl0ZW1zIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxufSIsIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgbWluLWhlaWdodDogNTAwcHg7XG59XG5cbi5uYXZpZ2F0aW9uLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubmF2aWdhdGlvbi1pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4ubmF2aWdhdGlvbi1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmF2aWdhdGlvbi1pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uLWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "guitar-tools";
        this.menus = [
            {
                title: "SCALES",
                link: ".",
                icon: "home",
            },
        ];
        this.opened = true;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/not-found/not-found.component */ "./src/app/modules/not-found/not-found.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/header/header.component */ "./src/app/modules/header/header.component.ts");
/* harmony import */ var _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/footer/footer.component */ "./src/app/modules/footer/footer.component.ts");
/* harmony import */ var _modules_component_one_component_one_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/component-one/component-one.component */ "./src/app/modules/component-one/component-one.component.ts");
/* harmony import */ var _modules_component_two_component_two_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/component-two/component-two.component */ "./src/app/modules/component-two/component-two.component.ts");
/* harmony import */ var _modules_table_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/table/table.component */ "./src/app/modules/table/table.component.ts");
/* harmony import */ var _modules_api_rest_api_rest_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/api-rest/api-rest.component */ "./src/app/modules/api-rest/api-rest.component.ts");
/* harmony import */ var _modules_drag_and_drop_test_drag_and_drop_test_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/drag-and-drop-test/drag-and-drop-test.component */ "./src/app/modules/drag-and-drop-test/drag-and-drop-test.component.ts");
/* harmony import */ var _components_scales_scales_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/scales/scales.component */ "./src/app/components/scales/scales.component.ts");
/* harmony import */ var _components_piano_piano_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/piano/piano.component */ "./src/app/components/piano/piano.component.ts");
/* harmony import */ var _components_guitar_guitar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/guitar/guitar.component */ "./src/app/components/guitar/guitar.component.ts");

// @angular







// @misc

// @angular/material

// app modules













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _modules_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
            _modules_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _modules_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
            _modules_component_one_component_one_component__WEBPACK_IMPORTED_MODULE_15__["ComponentOneComponent"],
            _modules_component_two_component_two_component__WEBPACK_IMPORTED_MODULE_16__["ComponentTwoComponent"],
            _modules_table_table_component__WEBPACK_IMPORTED_MODULE_17__["TableComponent"],
            _modules_api_rest_api_rest_component__WEBPACK_IMPORTED_MODULE_18__["ApiRestComponent"],
            _modules_drag_and_drop_test_drag_and_drop_test_component__WEBPACK_IMPORTED_MODULE_19__["DragAndDropTestComponent"],
            _components_scales_scales_component__WEBPACK_IMPORTED_MODULE_20__["ScalesComponent"],
            _components_piano_piano_component__WEBPACK_IMPORTED_MODULE_21__["PianoComponent"],
            _components_guitar_guitar_component__WEBPACK_IMPORTED_MODULE_22__["GuitarComponent"]
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__["platformBrowserDynamic"])()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/app/components/guitar/guitar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/guitar/guitar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"Source Sans Pro\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Source Sans Pro Regular\"), local(\"SourceSansPro-Regular\"), url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7g.ttf) format(\"truetype\");\n}\n* {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nbody {\n  background: #eee;\n  font-family: \"Source Sans Pro\", sans-serif;\n  letter-spacing: 0.05em;\n}\nh1 {\n  text-transform: uppercase;\n  text-align: center;\n  margin-top: 40px;\n}\n.guitar-neck {\n  position: relative;\n  margin-top: 40px;\n  left: 50%;\n  margin-left: -450px;\n  width: 960px;\n  height: 250px;\n  background: #755628;\n  box-shadow: inset -1px 0px 11px 0px rgba(0, 0, 0, 0.75);\n}\n.guitar-neck .open-notes {\n  position: absolute;\n  top: 3px;\n  left: -35px;\n}\n.guitar-neck .open-notes li {\n  margin-bottom: 20px;\n  font-size: 18px;\n  color: #fff;\n}\n.guitar-neck .open-notes li.active {\n  color: #fa990f;\n}\n.guitar-neck .fret {\n  float: left;\n  width: 3px;\n  height: 250px;\n  background: #d7d6d6;\n  margin-left: 75px;\n  border-right: 2px solid #686868;\n}\n.guitar-neck .fret.first {\n  position: absolute;\n  width: 50px;\n  left: -52px;\n  top: 0;\n  margin-left: 0;\n  background: #211f1d;\n}\n.guitar-neck .dots {\n  position: absolute;\n  width: 642px;\n  height: 20px;\n  top: 44%;\n  left: 19.5%;\n}\n.guitar-neck .dots li {\n  float: left;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #383530;\n  margin-right: 140px;\n}\n.guitar-neck .strings {\n  position: absolute;\n  left: 0;\n  top: 10px;\n  width: 960px;\n  height: 250px;\n}\n.guitar-neck .strings li {\n  height: 1px;\n  display: inline-block;\n  width: 100%;\n  background: #c8bb93;\n  margin-bottom: 38px;\n  border-bottom: 2px solid #958963;\n  box-sizing: border-box;\n}\n.guitar-neck .strings li:nth-child(2) {\n  height: 2px;\n}\n.guitar-neck .strings li:nth-child(3) {\n  height: 3px;\n}\n.guitar-neck .strings li:nth-child(4) {\n  height: 4px;\n}\n.guitar-neck .strings li:nth-child(5) {\n  height: 5px;\n}\n.guitar-neck .strings li:nth-child(6) {\n  height: 6px;\n}\n.guitar-neck .notes {\n  position: absolute;\n  left: 17px;\n  top: -7px;\n  width: 960px;\n  height: 258px;\n  overflow-x: hidden;\n}\n.guitar-neck .notes .mask {\n  position: absolute;\n  right: -189px;\n  bottom: 0;\n  width: 1184px;\n  height: 30px;\n}\n.guitar-neck .notes .mask ul {\n  position: relative;\n  float: left;\n}\n.guitar-neck .notes .mask ul li {\n  float: left;\n  width: 30px;\n  height: 30px;\n  margin-right: 50px;\n  background: #fa990f;\n  color: #fff;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 30px;\n  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n}\n.guitar-neck .notes .mask.a {\n  bottom: 47px;\n}\n.guitar-neck .notes .mask.d {\n  bottom: 93px;\n}\n.guitar-neck .notes .mask.g {\n  bottom: 137px;\n}\n.guitar-neck .notes .mask.b {\n  bottom: 181px;\n}\n.guitar-neck .notes .mask.high-e {\n  bottom: 224px;\n}\n.controls {\n  position: relative;\n  margin-top: 40px;\n  left: 50%;\n  margin-left: -380px;\n  width: 760px;\n  height: 300px;\n  text-align: center;\n  color: #333;\n}\n.controls a {\n  text-decoration: none;\n  background: #333;\n  color: #fff;\n  padding: 5px 10px;\n  margin-right: 40px;\n}\n.controls a.down {\n  margin-right: 0;\n}\n.controls h2 {\n  text-transform: uppercase;\n  margin: 40px 0;\n}\n.controls ul li {\n  float: left;\n  width: 40px;\n  height: 20px;\n  background: #333;\n  color: #fff;\n  margin-right: 20px;\n  cursor: pointer;\n}\n.controls ul li:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ndWl0YXIvQzpcXFVzZXJzXFxFemVub1xcT25lRHJpdmVcXERvY3VtZW50b3NcXERlc2Fycm9sbG9zXFxnaXRodWJcXEd1aXRhci1TY2FsZS1HZW5lcmF0b3Ivc3JjXFxhcHBcXGNvbXBvbmVudHNcXGd1aXRhclxcZ3VpdGFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2d1aXRhci9ndWl0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpTEFBQTtBQ0NGO0FEQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDQTtFQUNFLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQ0VGO0FEQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHRjtBRERBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1REFBQTtBQ0lGO0FERkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDS0Y7QURIQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNNRjtBREpBO0VBQ0UsY0FBQTtBQ09GO0FETEE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNRRjtBRE5BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNTRjtBRFBBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDVUY7QURSQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1dGO0FEVEE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNZRjtBRFZBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FDYUY7QURYQTtFQUNFLFdBQUE7QUNjRjtBRFpBO0VBQ0UsV0FBQTtBQ2VGO0FEYkE7RUFDRSxXQUFBO0FDZ0JGO0FEZEE7RUFDRSxXQUFBO0FDaUJGO0FEZkE7RUFDRSxXQUFBO0FDa0JGO0FEaEJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNtQkY7QURqQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNvQkY7QURsQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNxQkY7QURuQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0FDc0JGO0FEcEJBO0VBQ0UsWUFBQTtBQ3VCRjtBRHJCQTtFQUNFLFlBQUE7QUN3QkY7QUR0QkE7RUFDRSxhQUFBO0FDeUJGO0FEdkJBO0VBQ0UsYUFBQTtBQzBCRjtBRHhCQTtFQUNFLGFBQUE7QUMyQkY7QUR6QkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUM0QkY7QUQxQkE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUM2QkY7QUQzQkE7RUFDRSxlQUFBO0FDOEJGO0FENUJBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDK0JGO0FEN0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDZ0NGO0FEOUJBO0VBQ0UsZUFBQTtBQ2lDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3VpdGFyL2d1aXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBzcmM6IGxvY2FsKCdTb3VyY2UgU2FucyBQcm8gUmVndWxhcicpLCBsb2NhbCgnU291cmNlU2Fuc1Byby1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvc291cmNlc2Fuc3Byby92MTMvNnhLM2RTQllLY1NWLUxDb2VRcWZYMVJZT28zcU9LN2cudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbn1cclxuaDEge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLmd1aXRhci1uZWNrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC00NTBweDtcclxuICB3aWR0aDogOTYwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjNzU1NjI4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMHB4IDExcHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuLmd1aXRhci1uZWNrIC5vcGVuLW5vdGVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzcHg7XHJcbiAgbGVmdDogLTM1cHg7XHJcbn1cclxuLmd1aXRhci1uZWNrIC5vcGVuLW5vdGVzIGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZ3VpdGFyLW5lY2sgLm9wZW4tbm90ZXMgbGkuYWN0aXZlIHtcclxuICBjb2xvcjogI2ZhOTkwZjtcclxufVxyXG4uZ3VpdGFyLW5lY2sgLmZyZXQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZDdkNmQ2O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM2ODY4Njg7XHJcbn1cclxuLmd1aXRhci1uZWNrIC5mcmV0LmZpcnN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbGVmdDogLTUycHg7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICMyMTFmMWQ7XHJcbn1cclxuLmd1aXRhci1uZWNrIC5kb3RzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDY0MnB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICB0b3A6IDQ0JTtcclxuICBsZWZ0OiAxOS41JTtcclxufVxyXG4uZ3VpdGFyLW5lY2sgLmRvdHMgbGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzM4MzUzMDtcclxuICBtYXJnaW4tcmlnaHQ6IDE0MHB4O1xyXG59XHJcbi5ndWl0YXItbmVjayAuc3RyaW5ncyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiA5NjBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcbi5ndWl0YXItbmVjayAuc3RyaW5ncyBsaSB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNjOGJiOTM7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk1ODk2MztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5ndWl0YXItbmVjayAuc3RyaW5ncyBsaTpudGgtY2hpbGQoMikge1xyXG4gIGhlaWdodDogMnB4O1xyXG59XHJcbi5ndWl0YXItbmVjayAuc3RyaW5ncyBsaTpudGgtY2hpbGQoMykge1xyXG4gIGhlaWdodDogM3B4O1xyXG59XHJcbi5ndWl0YXItbmVjayAuc3RyaW5ncyBsaTpudGgtY2hpbGQoNCkge1xyXG4gIGhlaWdodDogNHB4O1xyXG59XHJcbi5ndWl0YXItbmVjayAuc3RyaW5ncyBsaTpudGgtY2hpbGQoNSkge1xyXG4gIGhlaWdodDogNXB4O1xyXG59XHJcbi5ndWl0YXItbmVjayAuc3RyaW5ncyBsaTpudGgtY2hpbGQoNikge1xyXG4gIGhlaWdodDogNnB4O1xyXG59XHJcbi5ndWl0YXItbmVjayAubm90ZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxN3B4O1xyXG4gIHRvcDogLTdweDtcclxuICB3aWR0aDogOTYwcHg7XHJcbiAgaGVpZ2h0OiAyNThweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLmd1aXRhci1uZWNrIC5ub3RlcyAubWFzayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTg5cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMTg0cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5ndWl0YXItbmVjayAubm90ZXMgLm1hc2sgdWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uZ3VpdGFyLW5lY2sgLm5vdGVzIC5tYXNrIHVsIGxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmYTk5MGY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG4uZ3VpdGFyLW5lY2sgLm5vdGVzIC5tYXNrLmEge1xyXG4gIGJvdHRvbTogNDdweDtcclxufVxyXG4uZ3VpdGFyLW5lY2sgLm5vdGVzIC5tYXNrLmQge1xyXG4gIGJvdHRvbTogOTNweDtcclxufVxyXG4uZ3VpdGFyLW5lY2sgLm5vdGVzIC5tYXNrLmcge1xyXG4gIGJvdHRvbTogMTM3cHg7XHJcbn1cclxuLmd1aXRhci1uZWNrIC5ub3RlcyAubWFzay5iIHtcclxuICBib3R0b206IDE4MXB4O1xyXG59XHJcbi5ndWl0YXItbmVjayAubm90ZXMgLm1hc2suaGlnaC1lIHtcclxuICBib3R0b206IDIyNHB4O1xyXG59XHJcbi5jb250cm9scyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzgwcHg7XHJcbiAgd2lkdGg6IDc2MHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcbi5jb250cm9scyBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuLmNvbnRyb2xzIGEuZG93biB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbi5jb250cm9scyBoMiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDQwcHggMDtcclxufVxyXG4uY29udHJvbHMgdWwgbGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbnRyb2xzIHVsIGxpOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbChcIlNvdXJjZSBTYW5zIFBybyBSZWd1bGFyXCIpLCBsb2NhbChcIlNvdXJjZVNhbnNQcm8tUmVndWxhclwiKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9zb3VyY2VzYW5zcHJvL3YxMy82eEszZFNCWUtjU1YtTENvZVFxZlgxUllPbzNxT0s3Zy50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbmgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uZ3VpdGFyLW5lY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC00NTBweDtcbiAgd2lkdGg6IDk2MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAjNzU1NjI4O1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDBweCAxMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4uZ3VpdGFyLW5lY2sgLm9wZW4tbm90ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAtMzVweDtcbn1cblxuLmd1aXRhci1uZWNrIC5vcGVuLW5vdGVzIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmd1aXRhci1uZWNrIC5vcGVuLW5vdGVzIGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmE5OTBmO1xufVxuXG4uZ3VpdGFyLW5lY2sgLmZyZXQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZDogI2Q3ZDZkNjtcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM2ODY4Njg7XG59XG5cbi5ndWl0YXItbmVjayAuZnJldC5maXJzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGxlZnQ6IC01MnB4O1xuICB0b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMjExZjFkO1xufVxuXG4uZ3VpdGFyLW5lY2sgLmRvdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2NDJweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0b3A6IDQ0JTtcbiAgbGVmdDogMTkuNSU7XG59XG5cbi5ndWl0YXItbmVjayAuZG90cyBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMzODM1MzA7XG4gIG1hcmdpbi1yaWdodDogMTQwcHg7XG59XG5cbi5ndWl0YXItbmVjayAuc3RyaW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogOTYwcHg7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5ndWl0YXItbmVjayAuc3RyaW5ncyBsaSB7XG4gIGhlaWdodDogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjYzhiYjkzO1xuICBtYXJnaW4tYm90dG9tOiAzOHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk1ODk2MztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmd1aXRhci1uZWNrIC5zdHJpbmdzIGxpOm50aC1jaGlsZCgyKSB7XG4gIGhlaWdodDogMnB4O1xufVxuXG4uZ3VpdGFyLW5lY2sgLnN0cmluZ3MgbGk6bnRoLWNoaWxkKDMpIHtcbiAgaGVpZ2h0OiAzcHg7XG59XG5cbi5ndWl0YXItbmVjayAuc3RyaW5ncyBsaTpudGgtY2hpbGQoNCkge1xuICBoZWlnaHQ6IDRweDtcbn1cblxuLmd1aXRhci1uZWNrIC5zdHJpbmdzIGxpOm50aC1jaGlsZCg1KSB7XG4gIGhlaWdodDogNXB4O1xufVxuXG4uZ3VpdGFyLW5lY2sgLnN0cmluZ3MgbGk6bnRoLWNoaWxkKDYpIHtcbiAgaGVpZ2h0OiA2cHg7XG59XG5cbi5ndWl0YXItbmVjayAubm90ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE3cHg7XG4gIHRvcDogLTdweDtcbiAgd2lkdGg6IDk2MHB4O1xuICBoZWlnaHQ6IDI1OHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5ndWl0YXItbmVjayAubm90ZXMgLm1hc2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTg5cHg7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDExODRweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZ3VpdGFyLW5lY2sgLm5vdGVzIC5tYXNrIHVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmd1aXRhci1uZWNrIC5ub3RlcyAubWFzayB1bCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmYTk5MGY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4uZ3VpdGFyLW5lY2sgLm5vdGVzIC5tYXNrLmEge1xuICBib3R0b206IDQ3cHg7XG59XG5cbi5ndWl0YXItbmVjayAubm90ZXMgLm1hc2suZCB7XG4gIGJvdHRvbTogOTNweDtcbn1cblxuLmd1aXRhci1uZWNrIC5ub3RlcyAubWFzay5nIHtcbiAgYm90dG9tOiAxMzdweDtcbn1cblxuLmd1aXRhci1uZWNrIC5ub3RlcyAubWFzay5iIHtcbiAgYm90dG9tOiAxODFweDtcbn1cblxuLmd1aXRhci1uZWNrIC5ub3RlcyAubWFzay5oaWdoLWUge1xuICBib3R0b206IDIyNHB4O1xufVxuXG4uY29udHJvbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zODBweDtcbiAgd2lkdGg6IDc2MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uY29udHJvbHMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cbi5jb250cm9scyBhLmRvd24ge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jb250cm9scyBoMiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuXG4uY29udHJvbHMgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udHJvbHMgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/guitar/guitar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/guitar/guitar.component.ts ***!
  \*******************************************************/
/*! exports provided: GuitarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuitarComponent", function() { return GuitarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GuitarComponent = class GuitarComponent {
    constructor() { }
    ngOnInit() {
    }
};
GuitarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guitar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./guitar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/guitar/guitar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./guitar.component.scss */ "./src/app/components/guitar/guitar.component.scss")).default]
    })
], GuitarComponent);



/***/ }),

/***/ "./src/app/components/piano/piano.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/piano/piano.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: #222;\n}\n\nul {\n  height: 18.875em;\n  width: 34em;\n  margin: 5em auto;\n  padding: 3em 0 0 3em;\n  position: relative;\n  border: 1px solid #160801;\n  border-radius: 1em;\n  background: -webkit-gradient(linear, left top, right bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0))), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/187/vwood.png);\n  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/187/vwood.png);\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5) inset, 0 1px rgba(212, 152, 125, 0.2) inset, 0 5px 15px rgba(0, 0, 0, 0.5);\n}\n\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  float: left;\n}\n\nul .white {\n  height: 16em;\n  width: 4em;\n  z-index: 1;\n  border-left: 1px solid #bbb;\n  border-bottom: 1px solid #bbb;\n  border-radius: 0 0 5px 5px;\n  box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset, 0 0 3px rgba(0, 0, 0, 0.2);\n  background: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#fff));\n  background: linear-gradient(to bottom, #eee 0%, #fff 100%);\n}\n\nul .white:active {\n  border-top: 1px solid #777;\n  border-left: 1px solid #999;\n  border-bottom: 1px solid #999;\n  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#e9e9e9));\n  background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);\n}\n\n.black {\n  height: 8em;\n  width: 2em;\n  margin: 0 0 0 -1em;\n  z-index: 2;\n  border: 1px solid #000;\n  border-radius: 0 0 3px 3px;\n  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5);\n  background: linear-gradient(45deg, #222 0%, #555 100%);\n}\n\n.black:active {\n  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5);\n  background: -webkit-gradient(linear, left top, right top, from(#444), to(#222));\n  background: linear-gradient(to right, #444 0%, #222 100%);\n}\n\n.a,\n.g,\n.f,\n.d,\n.c {\n  margin: 0 0 0 -1em;\n}\n\nul li:first-child {\n  border-radius: 5px 0 5px 5px;\n}\n\nul li:last-child {\n  border-radius: 0 5px 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waWFuby9DOlxcVXNlcnNcXEV6ZW5vXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcRGVzYXJyb2xsb3NcXGdpdGh1YlxcR3VpdGFyLVNjYWxlLUdlbmVyYXRvci9zcmNcXGFwcFxcY29tcG9uZW50c1xccGlhbm9cXHBpYW5vLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BpYW5vL3BpYW5vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZLQUFBO0VBQUEsbUpBQUE7RUFFQSxrSEFBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUdBQUE7RUFDQSxpRkFBQTtFQUFBLDBEQUFBO0FDQUY7O0FER0E7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrSEFBQTtFQUNBLG9GQUFBO0VBQUEsNkRBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLCtIQUFBO0VBRUEsc0RBQUE7QUNERjs7QURJQTtFQUNFLCtIQUFBO0VBRUEsK0VBQUE7RUFBQSx5REFBQTtBQ0ZGOztBREtBOzs7OztFQUtFLGtCQUFBO0FDRkY7O0FES0E7RUFDRSw0QkFBQTtBQ0ZGOztBREtBO0VBQ0UsNEJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGlhbm8vcGlhbm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZDogIzIyMjtcclxufVxyXG5cclxudWwge1xyXG4gIGhlaWdodDogMTguODc1ZW07XHJcbiAgd2lkdGg6IDM0ZW07XHJcbiAgbWFyZ2luOiA1ZW0gYXV0bztcclxuICBwYWRkaW5nOiAzZW0gMCAwIDNlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzE2MDgwMTtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjMpLCByZ2JhKDAsIDAsIDAsIDApKSxcclxuICAgIHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xODcvdndvb2QucG5nKTtcclxuICBib3gtc2hhZG93OiAwIDAgNTBweCByZ2JhKDAsIDAsIDAsIDAuNSkgaW5zZXQsIDAgMXB4IHJnYmEoMjEyLCAxNTIsIDEyNSwgMC4yKSBpbnNldCwgMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbmxpIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxudWwgLndoaXRlIHtcclxuICBoZWlnaHQ6IDE2ZW07XHJcbiAgd2lkdGg6IDRlbTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2JiYjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcclxuICBib3gtc2hhZG93OiAtMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgaW5zZXQsIDAgMCA1cHggI2NjYyBpbnNldCwgMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VlZSAwJSwgI2ZmZiAxMDAlKTtcclxufVxyXG5cclxudWwgLndoaXRlOmFjdGl2ZSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3Nzc7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOTk5O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xyXG4gIGJveC1zaGFkb3c6IDJweCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQsIC01cHggNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpIGluc2V0LCAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmIDAlLCAjZTllOWU5IDEwMCUpO1xyXG59XHJcblxyXG4uYmxhY2sge1xyXG4gIGhlaWdodDogOGVtO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgbWFyZ2luOiAwIDAgMCAtMWVtO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcclxuICBib3gtc2hhZG93OiAtMXB4IC0xcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSBpbnNldCwgMCAtNXB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjYpIGluc2V0LFxyXG4gICAgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMjIgMCUsICM1NTUgMTAwJSk7XHJcbn1cclxuXHJcbi5ibGFjazphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IC0xcHggLTFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIGluc2V0LCAwIC0ycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNikgaW5zZXQsXHJcbiAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ0NCAwJSwgIzIyMiAxMDAlKTtcclxufVxyXG5cclxuLmEsXHJcbi5nLFxyXG4uZixcclxuLmQsXHJcbi5jIHtcclxuICBtYXJnaW46IDAgMCAwIC0xZW07XHJcbn1cclxuXHJcbnVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCA1cHggNXB4O1xyXG59XHJcblxyXG51bCBsaTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggNXB4O1xyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufVxuXG51bCB7XG4gIGhlaWdodDogMTguODc1ZW07XG4gIHdpZHRoOiAzNGVtO1xuICBtYXJnaW46IDVlbSBhdXRvO1xuICBwYWRkaW5nOiAzZW0gMCAwIDNlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTYwODAxO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwKSksIHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xODcvdndvb2QucG5nKTtcbiAgYm94LXNoYWRvdzogMCAwIDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpIGluc2V0LCAwIDFweCByZ2JhKDIxMiwgMTUyLCAxMjUsIDAuMikgaW5zZXQsIDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5saSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbn1cblxudWwgLndoaXRlIHtcbiAgaGVpZ2h0OiAxNmVtO1xuICB3aWR0aDogNGVtO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiYmI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgYm94LXNoYWRvdzogLTFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIGluc2V0LCAwIDAgNXB4ICNjY2MgaW5zZXQsIDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWVlIDAlLCAjZmZmIDEwMCUpO1xufVxuXG51bCAud2hpdGU6YWN0aXZlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3Nzc7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzk5OTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XG4gIGJveC1zaGFkb3c6IDJweCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQsIC01cHggNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpIGluc2V0LCAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZiAwJSwgI2U5ZTllOSAxMDAlKTtcbn1cblxuLmJsYWNrIHtcbiAgaGVpZ2h0OiA4ZW07XG4gIHdpZHRoOiAyZW07XG4gIG1hcmdpbjogMCAwIDAgLTFlbTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gIGJveC1zaGFkb3c6IC0xcHggLTFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIGluc2V0LCAwIC01cHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNikgaW5zZXQsIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIyMiAwJSwgIzU1NSAxMDAlKTtcbn1cblxuLmJsYWNrOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IC0xcHggLTFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIGluc2V0LCAwIC0ycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNikgaW5zZXQsIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ0NCAwJSwgIzIyMiAxMDAlKTtcbn1cblxuLmEsXG4uZyxcbi5mLFxuLmQsXG4uYyB7XG4gIG1hcmdpbjogMCAwIDAgLTFlbTtcbn1cblxudWwgbGk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiA1cHggMCA1cHggNXB4O1xufVxuXG51bCBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/piano/piano.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/piano/piano.component.ts ***!
  \*****************************************************/
/*! exports provided: PianoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PianoComponent", function() { return PianoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PianoComponent = class PianoComponent {
    constructor() { }
    ngOnInit() {
    }
};
PianoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-piano',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./piano.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/piano/piano.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./piano.component.scss */ "./src/app/components/piano/piano.component.scss")).default]
    })
], PianoComponent);



/***/ }),

/***/ "./src/app/components/scales/scales.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/scales/scales.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper-container {\n  padding: 16px;\n}\n\n.mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.logo {\n  text-align: center;\n  display: block;\n  margin: 27px;\n}\n\n.guitar-container {\n  position: relative;\n  width: 100%;\n  overflow: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ntable.guitar {\n  background: url(https://thumbs.dreamstime.com/t/wood-texture-maple-background-design-49324284.jpg);\n}\n\ntable.guitar .trastes-numeros td {\n  background-color: white;\n}\n\ntable.guitar .trastes-puntitos td {\n  background-color: white;\n}\n\ntable.guitar .trastes-puntitos td span {\n  min-width: 0px;\n  width: 15px;\n  height: 15px;\n}\n\ntable.guitar .trastes-puntitos td.one span {\n  background-color: black;\n}\n\ntable.guitar .trastes-puntitos td.two span {\n  background-color: green;\n}\n\ntable.guitar tr.string td {\n  border-right: solid;\n  height: 40px;\n  width: 40px;\n  cursor: pointer;\n  position: relative;\n}\n\ntable.guitar tr.string td:before {\n  content: \" \";\n  display: block;\n  background: rgba(95, 84, 84, 0.27);\n  height: 5px;\n  width: 98%;\n  position: absolute;\n  top: 17px;\n  opacity: 0.5;\n  background: #727268;\n  background: -webkit-gradient(linear, left bottom, left top, from(#727268), color-stop(50%, #faf8f9), to(#d9d6cf));\n  background: linear-gradient(0deg, #727268 0%, #faf8f9 50%, #d9d6cf 100%);\n}\n\ntable.guitar tr.string td:first-child {\n  background-color: gainsboro;\n  border-right: solid 10px gray;\n}\n\ntd span {\n  text-align: center;\n  min-width: 30px;\n  width: 30px;\n  height: 30px;\n  margin: auto;\n  display: block;\n  line-height: 30px;\n  border-radius: 50%;\n  position: relative;\n}\n\ntd.active span {\n  color: white;\n  background: black;\n}\n\ntd.active.tonic span {\n  color: white;\n  background: blue;\n}\n\n.piano-container {\n  position: relative;\n  width: 100%;\n  overflow-x: auto;\n}\n\n.piano-container table.piano {\n  border: solid 1px;\n}\n\n.piano-container table.piano td {\n  background: white;\n  border: solid;\n  border-right: solid 1px;\n  height: 110px;\n  width: 45px;\n  min-width: 40px;\n  max-width: 340px;\n  cursor: pointer;\n  position: relative;\n}\n\n.piano-container table.piano td.c-s, .piano-container table.piano td.d-s, .piano-container table.piano td.f-s, .piano-container table.piano td.g-s, .piano-container table.piano td.a-s {\n  background: black;\n  color: white;\n  border: solid black;\n  border-top: 0;\n  position: absolute;\n  margin-left: -18px;\n  height: 70px;\n  width: 28px;\n  min-width: 0;\n  z-index: 9;\n}\n\n.piano-container table.piano td.active {\n  background: #c1c504;\n}\n\n.piano-container table.piano td span {\n  position: absolute;\n  left: 9px;\n  bottom: 7px;\n}\n\n.piano-container table.piano td.c-s span, .piano-container table.piano td.d-s span, .piano-container table.piano td.f-s span, .piano-container table.piano td.g-s span, .piano-container table.piano td.a-s span {\n  left: 0px;\n  bottom: 17px;\n}\n\n.example-ripple-container {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 25px;\n}\n\n.example-ripple {\n  cursor: pointer;\n  text-align: center;\n  margin-right: 15px;\n  margin-bottom: 15px;\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.example-ripple.active {\n  background-color: rgba(0, 0, 255, 0.5);\n}\n\n/** Styles to make the demo look better. */\n\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0;\n}\n\n.wrapper-container {\n  padding: 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.the-card {\n  width: 100%;\n}\n\n.cards-result {\n  max-width: 100%;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.form-elements {\n  width: 100%;\n}\n\n.section-options mat-slide-toggle {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2FsZXMvQzpcXFVzZXJzXFxFemVub1xcT25lRHJpdmVcXERvY3VtZW50b3NcXERlc2Fycm9sbG9zXFxnaXRodWJcXEd1aXRhci1TY2FsZS1HZW5lcmF0b3Ivc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNjYWxlc1xcc2NhbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NjYWxlcy9zY2FsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0FDQ0Q7O0FEU0E7RUFDQyxnQkFBQTtBQ05EOztBRFNBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ05EOztBRFFBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0xEOztBRE9BO0VBRUMseUJBQUE7QUNMRDs7QURRQTtFQUNDLGtHQUFBO0FDTEQ7O0FET0U7RUFDQyx1QkFBQTtBQ0xIOztBRFNFO0VBQ0MsdUJBQUE7QUNQSDs7QURRRztFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNJO0VBQ0MsdUJBQUE7QUNQTDs7QURXSTtFQUNDLHVCQUFBO0FDVEw7O0FEaUJFO0VBRUMsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2hCSDs7QURvQkU7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpSEFBQTtFQUFBLHdFQUFBO0FDbEJIOztBRDBCRTtFQUNDLDJCQUFBO0VBQ0EsNkJBQUE7QUN4Qkg7O0FENENBO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3pDRDs7QUQ0Q0E7RUFDQyxZQUFBO0VBRUEsaUJBQUE7QUMxQ0Q7O0FENkNBO0VBQ0MsWUFBQTtFQUVBLGdCQUFBO0FDM0NEOztBRDhDQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDM0NEOztBRDZDQztFQUNDLGlCQUFBO0FDM0NGOztBRDRDRTtFQUNDLGlCQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUMzQ0g7O0FENkNHO0VBS0MsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUMvQ0o7O0FEbURHO0VBQ0MsbUJBQUE7QUNqREo7O0FEb0RHO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ2xESjs7QURxREc7RUFLQyxTQUFBO0VBQ0EsWUFBQTtBQ3ZESjs7QUQ4REE7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtBQzNERDs7QUQ4REE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsdUJBQUE7RUFDQSx3Q0FBQTtFQUVBLDRCQUFBO0VBQUEsb0JBQUE7QUNoRUQ7O0FEa0VBO0VBQ0Msc0NBQUE7QUMvREQ7O0FEaUVBLDBDQUFBOztBQUNBO0VBQ0Msc0JBQUE7QUM5REQ7O0FEaUVBO0VBQ0Msa0JBQUE7QUM5REQ7O0FEaUVBO0VBQ0MsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDOUREOztBRGlFQTtFQUNDLFdBQUE7QUM5REQ7O0FEaUVBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUM5REQ7O0FEaUVBO0VBQ0MsV0FBQTtBQzlERDs7QURrRUM7RUFDQyxrQkFBQTtBQy9ERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2NhbGVzL3NjYWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLWNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMTZweDtcclxuXHQvLyBkaXNwbGF5OiBmbGV4O1xyXG5cdC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Ly8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIGJvZHkge1xyXG4vLyAgIGZvbnQ6IDE4cHgvMjJweCBhcmlhbDtcclxuLy8gfVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuXHRtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogMjdweDtcclxufVxyXG4uZ3VpdGFyLWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbnRhYmxlIHtcclxuXHQvLyBib3JkZXItc3BhY2luZzogMTBweDtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50YWJsZS5ndWl0YXIge1xyXG5cdGJhY2tncm91bmQ6IHVybChodHRwczovL3RodW1icy5kcmVhbXN0aW1lLmNvbS90L3dvb2QtdGV4dHVyZS1tYXBsZS1iYWNrZ3JvdW5kLWRlc2lnbi00OTMyNDI4NC5qcGcpO1xyXG5cdC50cmFzdGVzLW51bWVyb3Mge1xyXG5cdFx0dGQge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0LnRyYXN0ZXMtcHVudGl0b3Mge1xyXG5cdFx0dGQge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0bWluLXdpZHRoOiAwcHg7XHJcblx0XHRcdFx0d2lkdGg6IDE1cHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAxNXB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdCYub25lIHtcclxuXHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQmLnR3byB7XHJcblx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3Jvc2V3b29kLmpwZ1wiKTtcclxuXHJcblx0dHIuc3RyaW5nIHtcclxuXHRcdHRkIHtcclxuXHRcdFx0Ly8gYmFja2dyb3VuZDogcmdiKDIyMiwgMTg5LCAxNjApO1xyXG5cdFx0XHRib3JkZXItcmlnaHQ6IHNvbGlkO1xyXG5cdFx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBjdWVyZGEgYWxmYVxyXG5cdFx0dGQ6YmVmb3JlIHtcclxuXHRcdFx0Y29udGVudDogXCIgXCI7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDk1LCA4NCwgODQsIDAuMjcpO1xyXG5cdFx0XHRoZWlnaHQ6IDVweDtcclxuXHRcdFx0d2lkdGg6IDk4JTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDE3cHg7XHJcblx0XHRcdG9wYWNpdHk6IDAuNTtcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiKDExNCwgMTE0LCAxMDQpO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcblx0XHRcdFx0MGRlZyxcclxuXHRcdFx0XHRyZ2JhKDExNCwgMTE0LCAxMDQsIDEpIDAlLFxyXG5cdFx0XHRcdHJnYmEoMjUwLCAyNDgsIDI0OSwgMSkgNTAlLFxyXG5cdFx0XHRcdHJnYmEoMjE3LCAyMTQsIDIwNywgMSkgMTAwJVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRkOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG5cdFx0XHRib3JkZXItcmlnaHQ6IHNvbGlkIDEwcHggZ3JheTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIHRhYmxlLmd1aXRhciB0ci5zdHJpbmcgdGQ6YWZ0ZXIge1xyXG4vLyAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIGJhY2tncm91bmQ6IHJnYmEoOTUsIDg0LCA4NCwgMC4yNyk7XHJcbi8vICAgaGVpZ2h0OiA4cHg7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogMTZweDtcclxuLy8gfVxyXG5cclxuLy8gdGFibGUuZ3VpdGFyIHRyLnN0cmluZyB0ZDpmaXJzdC1jaGlsZCB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4vLyAgIGJvcmRlci1yaWdodDogc29saWQgMTBweCBncmF5O1xyXG4vLyB9XHJcblxyXG50ZCBzcGFuIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWluLXdpZHRoOiAzMHB4O1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxudGQuYWN0aXZlIHNwYW4ge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHQvLyBib3gtc2hhZG93OiBpbnNldCAtMnB4IC0zcHggN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuNDIpO1xyXG5cdGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG50ZC5hY3RpdmUudG9uaWMgc3BhbiB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdC8vIGJveC1zaGFkb3c6IGluc2V0IC0ycHggLTNweCA3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC40Mik7XHJcblx0YmFja2dyb3VuZDogYmx1ZTtcclxufVxyXG5cclxuLnBpYW5vLWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93LXg6IGF1dG87XHJcblxyXG5cdHRhYmxlLnBpYW5vIHtcclxuXHRcdGJvcmRlcjogc29saWQgMXB4O1xyXG5cdFx0dGQge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0Ym9yZGVyOiBzb2xpZDtcclxuXHJcblx0XHRcdGJvcmRlci1yaWdodDogc29saWQgMXB4O1xyXG5cdFx0XHRoZWlnaHQ6IDExMHB4O1xyXG5cdFx0XHR3aWR0aDogNDVweDtcclxuXHRcdFx0bWluLXdpZHRoOiA0MHB4O1xyXG5cdFx0XHRtYXgtd2lkdGg6IDM0MHB4O1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0Ly8gYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0cHggMHB4IGJsYWNrO1xyXG5cdFx0XHQmLmMtcyxcclxuXHRcdFx0Ji5kLXMsXHJcblx0XHRcdCYuZi1zLFxyXG5cdFx0XHQmLmctcyxcclxuXHRcdFx0Ji5hLXMge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IGJsYWNrO1xyXG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHRib3JkZXI6IHNvbGlkIGJsYWNrO1xyXG5cdFx0XHRcdGJvcmRlci10b3A6IDA7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMThweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDcwcHg7XHJcblx0XHRcdFx0d2lkdGg6IDI4cHg7XHJcblx0XHRcdFx0bWluLXdpZHRoOiAwO1xyXG5cdFx0XHRcdHotaW5kZXg6IDk7XHJcblx0XHRcdFx0Ly8gYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0cHggMHB4IGJsYWNrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmLmFjdGl2ZSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2MxYzUwNDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6IDlweDtcclxuXHRcdFx0XHRib3R0b206IDdweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ji5jLXMgc3BhbixcclxuXHRcdFx0Ji5kLXMgc3BhbixcclxuXHRcdFx0Ji5mLXMgc3BhbixcclxuXHRcdFx0Ji5nLXMgc3BhbixcclxuXHRcdFx0Ji5hLXMgc3BhbiB7XHJcblx0XHRcdFx0bGVmdDogMHB4O1xyXG5cdFx0XHRcdGJvdHRvbTogMTdweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8vXHJcbi5leGFtcGxlLXJpcHBsZS1jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmV4YW1wbGUtcmlwcGxlIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcblx0d2lkdGg6IDgwcHg7XHJcblx0aGVpZ2h0OiA4MHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG5cclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuXHQtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG4uZXhhbXBsZS1yaXBwbGUuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC41KTtcclxufVxyXG4vKiogU3R5bGVzIHRvIG1ha2UgdGhlIGRlbW8gbG9vayBiZXR0ZXIuICovXHJcbi5leGFtcGxlLXJpcHBsZS1jaGVja2JveCB7XHJcblx0bWFyZ2luOiA2cHggMTJweCA2cHggMDtcclxufVxyXG5cclxuLmV4YW1wbGUtcmlwcGxlLWZvcm0tZmllbGQge1xyXG5cdG1hcmdpbjogMCAxMnB4IDAgMDtcclxufVxyXG5cclxuLndyYXBwZXItY29udGFpbmVyIHtcclxuXHRwYWRkaW5nOiAxNnB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRoZS1jYXJkIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmRzLXJlc3VsdCB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudHMge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VjdGlvbi1vcHRpb25zIHtcclxuXHRtYXQtc2xpZGUtdG9nZ2xlIHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTVweDtcclxuXHR9XHJcbn1cclxuIiwiLndyYXBwZXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDI3cHg7XG59XG5cbi5ndWl0YXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGFibGUuZ3VpdGFyIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vdGh1bWJzLmRyZWFtc3RpbWUuY29tL3Qvd29vZC10ZXh0dXJlLW1hcGxlLWJhY2tncm91bmQtZGVzaWduLTQ5MzI0Mjg0LmpwZyk7XG59XG50YWJsZS5ndWl0YXIgLnRyYXN0ZXMtbnVtZXJvcyB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxudGFibGUuZ3VpdGFyIC50cmFzdGVzLXB1bnRpdG9zIHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG50YWJsZS5ndWl0YXIgLnRyYXN0ZXMtcHVudGl0b3MgdGQgc3BhbiB7XG4gIG1pbi13aWR0aDogMHB4O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxudGFibGUuZ3VpdGFyIC50cmFzdGVzLXB1bnRpdG9zIHRkLm9uZSBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG50YWJsZS5ndWl0YXIgLnRyYXN0ZXMtcHVudGl0b3MgdGQudHdvIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbnRhYmxlLmd1aXRhciB0ci5zdHJpbmcgdGQge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnRhYmxlLmd1aXRhciB0ci5zdHJpbmcgdGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk1LCA4NCwgODQsIDAuMjcpO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDk4JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgYmFja2dyb3VuZDogIzcyNzI2ODtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM3MjcyNjggMCUsICNmYWY4ZjkgNTAlLCAjZDlkNmNmIDEwMCUpO1xufVxudGFibGUuZ3VpdGFyIHRyLnN0cmluZyB0ZDpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxMHB4IGdyYXk7XG59XG5cbnRkIHNwYW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG50ZC5hY3RpdmUgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbnRkLmFjdGl2ZS50b25pYyBzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xufVxuXG4ucGlhbm8tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5waWFuby1jb250YWluZXIgdGFibGUucGlhbm8ge1xuICBib3JkZXI6IHNvbGlkIDFweDtcbn1cbi5waWFuby1jb250YWluZXIgdGFibGUucGlhbm8gdGQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiA0NXB4O1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIG1heC13aWR0aDogMzQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBpYW5vLWNvbnRhaW5lciB0YWJsZS5waWFubyB0ZC5jLXMsIC5waWFuby1jb250YWluZXIgdGFibGUucGlhbm8gdGQuZC1zLCAucGlhbm8tY29udGFpbmVyIHRhYmxlLnBpYW5vIHRkLmYtcywgLnBpYW5vLWNvbnRhaW5lciB0YWJsZS5waWFubyB0ZC5nLXMsIC5waWFuby1jb250YWluZXIgdGFibGUucGlhbm8gdGQuYS1zIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXRvcDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTE4cHg7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDI4cHg7XG4gIG1pbi13aWR0aDogMDtcbiAgei1pbmRleDogOTtcbn1cbi5waWFuby1jb250YWluZXIgdGFibGUucGlhbm8gdGQuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2MxYzUwNDtcbn1cbi5waWFuby1jb250YWluZXIgdGFibGUucGlhbm8gdGQgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOXB4O1xuICBib3R0b206IDdweDtcbn1cbi5waWFuby1jb250YWluZXIgdGFibGUucGlhbm8gdGQuYy1zIHNwYW4sIC5waWFuby1jb250YWluZXIgdGFibGUucGlhbm8gdGQuZC1zIHNwYW4sIC5waWFuby1jb250YWluZXIgdGFibGUucGlhbm8gdGQuZi1zIHNwYW4sIC5waWFuby1jb250YWluZXIgdGFibGUucGlhbm8gdGQuZy1zIHNwYW4sIC5waWFuby1jb250YWluZXIgdGFibGUucGlhbm8gdGQuYS1zIHNwYW4ge1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMTdweDtcbn1cblxuLmV4YW1wbGUtcmlwcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5leGFtcGxlLXJpcHBsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5leGFtcGxlLXJpcHBsZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC41KTtcbn1cblxuLyoqIFN0eWxlcyB0byBtYWtlIHRoZSBkZW1vIGxvb2sgYmV0dGVyLiAqL1xuLmV4YW1wbGUtcmlwcGxlLWNoZWNrYm94IHtcbiAgbWFyZ2luOiA2cHggMTJweCA2cHggMDtcbn1cblxuLmV4YW1wbGUtcmlwcGxlLWZvcm0tZmllbGQge1xuICBtYXJnaW46IDAgMTJweCAwIDA7XG59XG5cbi53cmFwcGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGhlLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmRzLXJlc3VsdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmZvcm0tZWxlbWVudHMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlY3Rpb24tb3B0aW9ucyBtYXQtc2xpZGUtdG9nZ2xlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/scales/scales.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/scales/scales.component.ts ***!
  \*******************************************************/
/*! exports provided: ScalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalesComponent", function() { return ScalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScalesComponent = class ScalesComponent {
    //#endregion vars
    //#region methods
    constructor() {
        //#region vars
        this.showGuitar = true;
        this.showPiano = true;
        // menu
        this.panelOpenState = false;
        this.notes = [
            {
                noteStr: "C",
                active: false,
                root: false,
            },
            {
                noteStr: "C#",
                active: false,
                root: false,
            },
            {
                noteStr: "D",
                active: false,
                root: false,
            },
            {
                noteStr: "D#",
                active: false,
                root: false,
            },
            {
                noteStr: "E",
                active: false,
                root: false,
            },
            {
                noteStr: "F",
                active: false,
                root: false,
            },
            {
                noteStr: "F#",
                active: false,
                root: false,
            },
            {
                noteStr: "G",
                active: false,
                root: false,
            },
            {
                noteStr: "G#",
                active: false,
                root: false,
            },
            {
                noteStr: "A",
                active: false,
                root: false,
            },
            {
                noteStr: "A#",
                active: false,
                root: false,
            },
            {
                noteStr: "B",
                active: false,
                root: false,
            },
        ];
        this.cuerdas = ["E", "B", "G", "D", "A", "E"];
        this.cantidadTrastes = 24;
        this.cantidadTrastesArr = [];
        this.showOptions = true;
        this.sliderColor = "primary";
        // cantidadCuerdas: number = 6;
        this.puntitos = {
            3: 1,
            5: 1,
            7: 1,
            9: 1,
            12: 2,
            15: 1,
            17: 1,
            19: 1,
            21: 1,
            24: 2,
        };
        this.diapason = [];
        this.pianoCantidadTeclas = 22;
        this.pianoTeclas = [];
        console.clear();
        var t = this;
        t.diapasonConstructor();
        t.pianoConstructor();
    }
    ngOnInit() { }
    renderPuntitosGuitarClassCss(nroTraste) {
        var t = this;
        return t.puntitos[nroTraste];
    }
    onClickNoteRoot(noteRootValue, index) {
        var t = this;
        t.notes.forEach((childObj) => {
            if (noteRootValue.noteStr == childObj.noteStr) {
                childObj.root = true;
                childObj.active = true;
            }
            else {
                childObj.root = false;
            }
        });
        t.noteRootValue = index;
    }
    diapasonConstructor() {
        var t = this;
        t.diapason = [];
        for (let index = 0; index < t.cuerdas.length; index++) {
            // t.cantidadTrastesArr.push(index);
            // console.log('index: ', index)
            // console.log('t.cuerdas[index]: ', t.cuerdas[index])
            let noteIndex = t.notes.findIndex((eee) => eee.noteStr === t.cuerdas[index]);
            // console.log('noteIndex: ', noteIndex);
            var r = noteIndex;
            let stringtopush = [];
            // se crea la cuerda
            for (let n = 0; n < t.cantidadTrastes; n++) {
                // stringtopush
                // t.diapason.push(t.notes[r]);
                stringtopush.push(t.notes[r]);
                // if
                if (r == 11) {
                    r = 0;
                }
                else {
                    r++;
                }
                // if{ noteIndex<= t.notes.length}
                // noteIndex++
            }
            t.diapason.push(stringtopush);
        }
        t.cantidadTrastesConstructor();
    }
    onClickNote(note) {
        var t = this;
        for (let index = 0; index < t.notes.length; index++) {
            if (note.noteStr === t.notes[index].noteStr) {
                t.notes[index].active = !t.notes[index].active;
            }
        }
        t.diapasonConstructor();
        t.pianoConstructor();
    }
    pianoConstructor() {
        var t = this;
        t.pianoTeclas = [];
        var r = 0;
        for (let i = 0; i < t.pianoCantidadTeclas; i++) {
            var formatClassesCss = t.notes[r];
            formatClassesCss["classes"] = t.notes[r].noteStr
                .toLowerCase()
                .replace("#", "-s");
            t.pianoTeclas.push(formatClassesCss);
            // console.log('formatClassesCss ', formatClassesCss);
            if (r == 11) {
                r = 0;
            }
            else {
                r++;
            }
        }
    }
    cantidadTrastesConstructor() {
        var t = this;
        t.cantidadTrastesArr = [];
        for (let index = 0; index < t.cantidadTrastes; index++) {
            t.cantidadTrastesArr.push(index);
        }
    }
    onClickAddString() {
        this.cuerdas.push("");
    }
    onClickDeleteString() {
        this.cuerdas.pop();
    }
};
ScalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-scales",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/scales/scales.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scales.component.scss */ "./src/app/components/scales/scales.component.scss")).default]
    })
], ScalesComponent);



/***/ }),

/***/ "./src/app/modules/api-rest/api-rest.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/api-rest/api-rest.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper-container {\n  padding: 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.the-card {\n  width: 100%;\n}\n\n.cards-result {\n  max-width: 100%;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.form-elements {\n  width: 100%;\n}\n\n.example-button-row button,\n.example-button-row a {\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcGktcmVzdC9DOlxcVXNlcnNcXEV6ZW5vXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcRGVzYXJyb2xsb3NcXGdpdGh1YlxcR3VpdGFyLVNjYWxlLUdlbmVyYXRvci9zcmNcXGFwcFxcbW9kdWxlc1xcYXBpLXJlc3RcXGFwaS1yZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FwaS1yZXN0L2FwaS1yZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBRElBOztFQUVJLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FwaS1yZXN0L2FwaS1yZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGhlLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkcy1yZXN1bHQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59IiwiLndyYXBwZXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aGUtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZHMtcmVzdWx0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZm9ybS1lbGVtZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbixcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/api-rest/api-rest.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/api-rest/api-rest.component.ts ***!
  \********************************************************/
/*! exports provided: ApiRestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRestComponent", function() { return ApiRestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let ApiRestComponent = class ApiRestComponent {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.loadingData = false;
        this.showResults = false;
        this.urlLink = "https://jsonplaceholder.typicode.com/photos"; // URL example
        this.jsonObj = [];
    }
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
            .catch(function (error) {
            console.log("Hubo un problema con la petición Fetch:" + error.message);
            t._snackBar.open("Hubo un problema con la petición Fetch:" + error.message, "OK", {
                duration: 2000
            });
        })
            .finally(function () {
            t.loadingData = false;
        });
    }
};
ApiRestComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
ApiRestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-api-rest",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./api-rest.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/api-rest/api-rest.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./api-rest.component.scss */ "./src/app/modules/api-rest/api-rest.component.scss")).default]
    })
], ApiRestComponent);



/***/ }),

/***/ "./src/app/modules/component-one/component-one.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/component-one/component-one.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper-container {\n  padding: 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 500px;\n}\n\n.first-button {\n  margin-right: 16px;\n}\n\n.example-full-width {\n  max-width: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnQtb25lL0M6XFxVc2Vyc1xcRXplbm9cXE9uZURyaXZlXFxEb2N1bWVudG9zXFxEZXNhcnJvbGxvc1xcZ2l0aHViXFxHdWl0YXItU2NhbGUtR2VuZXJhdG9yL3NyY1xcYXBwXFxtb2R1bGVzXFxjb21wb25lbnQtb25lXFxjb21wb25lbnQtb25lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NvbXBvbmVudC1vbmUvY29tcG9uZW50LW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnQtb25lL2NvbXBvbmVudC1vbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcblxyXG59XHJcblxyXG4uZmlyc3QtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi53cmFwcGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4uZmlyc3QtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/component-one/component-one.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/component-one/component-one.component.ts ***!
  \******************************************************************/
/*! exports provided: ComponentOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentOneComponent", function() { return ComponentOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComponentOneComponent = class ComponentOneComponent {
    constructor() {
        // value = "Clear me";
        this.name = "sssssss";
        // name: string = "";
        this.show = true;
        // show: boolean = false;
        this.parentMessage = "parentMessage";
    }
    ngOnInit() { }
    procesaPropagar(mensaje) {
        console.log("procesaPropagar()", mensaje);
        this.name = mensaje;
    }
};
ComponentOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-component-one",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./component-one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/component-one/component-one.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./component-one.component.scss */ "./src/app/modules/component-one/component-one.component.scss")).default]
    })
], ComponentOneComponent);



/***/ }),

/***/ "./src/app/modules/component-two/component-two.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/component-two/component-two.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper-container {\n  padding: 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.the-card {\n  min-width: 150px;\n  max-width: 500px;\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnQtdHdvL0M6XFxVc2Vyc1xcRXplbm9cXE9uZURyaXZlXFxEb2N1bWVudG9zXFxEZXNhcnJvbGxvc1xcZ2l0aHViXFxHdWl0YXItU2NhbGUtR2VuZXJhdG9yL3NyY1xcYXBwXFxtb2R1bGVzXFxjb21wb25lbnQtdHdvXFxjb21wb25lbnQtdHdvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NvbXBvbmVudC10d28vY29tcG9uZW50LXR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcG9uZW50LXR3by9jb21wb25lbnQtdHdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGhlLWNhcmQge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn0iLCIud3JhcHBlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRoZS1jYXJkIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/component-two/component-two.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/component-two/component-two.component.ts ***!
  \******************************************************************/
/*! exports provided: ComponentTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentTwoComponent", function() { return ComponentTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let ComponentTwoComponent = class ComponentTwoComponent {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
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
};
ComponentTwoComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ComponentTwoComponent.prototype, "textToShow", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ComponentTwoComponent.prototype, "propagar", void 0);
ComponentTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-component-two",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./component-two.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/component-two/component-two.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./component-two.component.scss */ "./src/app/modules/component-two/component-two.component.scss")).default]
    })
], ComponentTwoComponent);



/***/ }),

/***/ "./src/app/modules/drag-and-drop-test/drag-and-drop-test.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/drag-and-drop-test/drag-and-drop-test.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box-2 {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box-2:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kcmFnLWFuZC1kcm9wLXRlc3QvQzpcXFVzZXJzXFxFemVub1xcT25lRHJpdmVcXERvY3VtZW50b3NcXERlc2Fycm9sbG9zXFxnaXRodWJcXEd1aXRhci1TY2FsZS1HZW5lcmF0b3Ivc3JjXFxhcHBcXG1vZHVsZXNcXGRyYWctYW5kLWRyb3AtdGVzdFxcZHJhZy1hbmQtZHJvcC10ZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RyYWctYW5kLWRyb3AtdGVzdC9kcmFnLWFuZC1kcm9wLXRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FDQ0o7O0FESUE7RUFDSSxzRUFBQTtFQUFBLDhEQUFBO0VBQUEsc0RBQUE7RUFBQSwwR0FBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBQ0ksc0VBQUE7RUFBQSw4REFBQTtFQUFBLHNEQUFBO0VBQUEsMEdBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNFQUFBO0VBQUEsOERBQUE7RUFBQSxzREFBQTtFQUFBLDBHQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrREFBQTtFQUFBLHVEQUFBO0VBQ0EsK0dBQUE7QUNESjs7QURNQTtFQUNJLHFIQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RyYWctYW5kLWRyb3AtdGVzdC9kcmFnLWFuZC1kcm9wLXRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1saXN0IHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWN1c3RvbS1wbGFjZWhvbGRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gtMiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveC0yOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59IiwiLmV4YW1wbGUtbGlzdCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtY3VzdG9tLXBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94LTIge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5leGFtcGxlLWJveC0yOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/drag-and-drop-test/drag-and-drop-test.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/drag-and-drop-test/drag-and-drop-test.component.ts ***!
  \****************************************************************************/
/*! exports provided: DragAndDropTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropTestComponent", function() { return DragAndDropTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");



/**
 * @title Drag&Drop custom placeholer
 */
let DragAndDropTestComponent = class DragAndDropTestComponent {
    /**
     * @title Drag&Drop custom placeholer
     */
    constructor() {
        this.movies = [
            "Episode I - The Phantom Menace",
            "Episode II - Attack of the Clones",
            "Episode III - Revenge of the Sith",
            "Episode IV - A New Hope",
            "Episode V - The Empire Strikes Back",
            "Episode VI - Return of the Jedi",
            "Episode VII - The Force Awakens",
            "Episode VIII - The Last Jedi"
        ];
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.movies, event.previousIndex, event.currentIndex);
    }
};
DragAndDropTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-drag-and-drop-test",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drag-and-drop-test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/drag-and-drop-test/drag-and-drop-test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drag-and-drop-test.component.scss */ "./src/app/modules/drag-and-drop-test/drag-and-drop-test.component.scss")).default]
    })
], DragAndDropTestComponent);



/***/ }),

/***/ "./src/app/modules/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/footer/footer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 600px) {\n  .footer-container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mb290ZXIvQzpcXFVzZXJzXFxFemVub1xcT25lRHJpdmVcXERvY3VtZW50b3NcXERlc2Fycm9sbG9zXFxnaXRodWJcXEd1aXRhci1TY2FsZS1HZW5lcmF0b3Ivc3JjXFxhcHBcXG1vZHVsZXNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLFlBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmZvb3Rlci1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn0iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5mb290ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/modules/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/header/header.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 300px;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9oZWFkZXIvQzpcXFVzZXJzXFxFemVub1xcT25lRHJpdmVcXERvY3VtZW50b3NcXERlc2Fycm9sbG9zXFxnaXRodWJcXEd1aXRhci1TY2FsZS1HZW5lcmF0b3Ivc3JjXFxhcHBcXG1vZHVsZXNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn0iLCIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "textToShow", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/not-found/not-found.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/not-found/not-found.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/not-found/not-found.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/not-found/not-found.component.ts ***!
  \**********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// app.config.ts
let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
        // alert(AppConfig.apiEndpoint);
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-not-found",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/modules/not-found/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/modules/table/table.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/table/table.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper-container {\n  padding: 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.the-card {\n  width: 100%;\n}\n\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90YWJsZS9DOlxcVXNlcnNcXEV6ZW5vXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcRGVzYXJyb2xsb3NcXGdpdGh1YlxcR3VpdGFyLVNjYWxlLUdlbmVyYXRvci9zcmNcXGFwcFxcbW9kdWxlc1xcdGFibGVcXHRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGhlLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiLndyYXBwZXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aGUtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/table/table.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/table/table.component.ts ***!
  \**************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const TABLE_DATA = [
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
let TableComponent = class TableComponent {
    constructor() {
        this.displayedColumns = ["theId", "name", "value", "theType"];
        this.dataSource = TABLE_DATA;
    }
    ngOnInit() { }
};
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-table",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/table/table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.scss */ "./src/app/modules/table/table.component.scss")).default]
    })
], TableComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ezeno\OneDrive\Documentos\Desarrollos\github\Guitar-Scale-Generator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map