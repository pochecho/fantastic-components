import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from '../atoms/atoms.module';

import { PlayerItemComponent } from './player-item/player-item.component';
import { GamePanelComponent } from './game-panel/game-panel.component';


@NgModule({
  declarations: [
    PlayerItemComponent,
    GamePanelComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    PlayerItemComponent,
    GamePanelComponent
  ]
})
export class MoleculesModule { }
