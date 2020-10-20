import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtomsModule, MoleculesModule } from 'vc-components-expo';
import { MatSliderModule } from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AtomsModule,
    MoleculesModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
