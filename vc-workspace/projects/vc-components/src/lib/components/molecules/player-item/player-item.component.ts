import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vc-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent implements OnInit {

  @Input() playerName: string;
  @Input() playerColor: string;
  @Input() startedCall: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
