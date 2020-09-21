import { AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { PlayerItemComponent } from '../player-item/player-item.component';

@Component({
  selector: 'vc-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit, AfterViewInit {

  // @Input() players:any;
  // @ContentChildren(PlayerItemComponent) players: QueryList<PlayerItemComponent>;


  constructor() { }

  ngAfterViewInit(): void {
    // console.log(this.players);
  }

  ngOnInit(): void {
  }

}
