import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vc-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() type = 'title';
  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
