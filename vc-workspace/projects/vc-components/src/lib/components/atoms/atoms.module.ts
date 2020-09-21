import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { AlertComponent } from './alert/alert.component';
import { AvatarComponent } from './avatar/avatar.component';


@NgModule({
  declarations: [
    TitleComponent,
    AlertComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    TitleComponent,
    AlertComponent,
    AvatarComponent
  ]
})
export class AtomsModule { }
