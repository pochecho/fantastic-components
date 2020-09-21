import { Component, Input, OnInit } from '@angular/core';
import { avatars } from "./avatars";
@Component({
  selector: 'vc-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() color: string;
  avatars = avatars;
  constructor() { }

  ngOnInit(): void {
  }

}
