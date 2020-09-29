import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { ButtonOverviewExample } from './components/button-overview/button-overview-example';
import { TextOverviewComponent } from './components/text-overview/text-overview.component';
import { TableOverviewComponent } from './components/table-overview/table-overview.component';
import { DropdownOverviewComponent } from './components/dropdown-overview/dropdown-overview.component';
import { CheckboxOverviewComponent } from './components/checkbox-overview/checkbox-overview.component';
import { RadioOverviewComponent } from './components/radio-overview/radio-overview.component';
import { ChipsOverviewComponent } from './components/chips-overview/chips-overview.component';
import { MyCustomListComponent } from './components/my-custom-list/my-custom-list.component';


@NgModule({
  declarations: [
    ButtonOverviewExample,
    AppComponent,
    TextOverviewComponent,
    TableOverviewComponent,
    DropdownOverviewComponent,
    CheckboxOverviewComponent,
    RadioOverviewComponent,
    ChipsOverviewComponent,
    MyCustomListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
