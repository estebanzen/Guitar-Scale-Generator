// @angular
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// @misc
import { AppRoutingModule } from "./app-routing.module";

// @angular/material
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";

// app modules
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { HomeComponent } from "./modules/home/home.component";
import { HeaderComponent } from "./modules/header/header.component";
import { FooterComponent } from "./modules/footer/footer.component";
import { ComponentOneComponent } from "./modules/component-one/component-one.component";
import { ComponentTwoComponent } from "./modules/component-two/component-two.component";
import { TableComponent } from "./modules/table/table.component";
import { ApiRestComponent } from "./modules/api-rest/api-rest.component";
import { DragAndDropTestComponent } from "./modules/drag-and-drop-test/drag-and-drop-test.component";
import { ScalesComponent } from './components/scales/scales.component';
import { PianoComponent } from './components/piano/piano.component';
import { GuitarComponent } from './components/guitar/guitar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    TableComponent,
    ApiRestComponent,
    DragAndDropTestComponent,
    ScalesComponent,
    PianoComponent,
    GuitarComponent
  ],
  imports: [
    HttpClientModule,
    DragDropModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
