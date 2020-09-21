import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtomsModule,MoleculesModule } from "vc-components-expo";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AtomsModule,
    MoleculesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
