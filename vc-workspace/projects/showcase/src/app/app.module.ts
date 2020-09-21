import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtomsModule } from '../../../vc-components/src/lib/components/atoms/atoms.module';
import { MoleculesModule } from '../../../vc-components/src/lib/components/molecules/molecules.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomsModule, MoleculesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
