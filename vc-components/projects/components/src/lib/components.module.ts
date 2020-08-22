import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { AtomsModule } from './components/atoms/atoms.module';

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    AtomsModule
  ],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
