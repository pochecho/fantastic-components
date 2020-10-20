import { Component } from '@angular/core';
import { AtomsModule   } from "../../../vc-components/src/public-api";
import { AlertComponent } from 'projects/vc-components/src/lib/components/atoms/alert/alert.component';
interface IPlayer {
  name: string;
  color: string;
  startedCall: boolean;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  a:AlertComponent;

  players: IPlayer[] = [
    {
      name: 'Monóxido',
      color: 'rose',
      startedCall: false
    },
    {
      name: 'Pochecho',
      color: 'white',
      startedCall: false

    },
    {
      name: 'Don_Seco',
      color: 'red',
      startedCall: false

    },
    {
      name: 'Pedro',
      color: 'green',
      startedCall: true

    },
    {
      name: 'TakunKun',
      color: 'yellow',
      startedCall: false

    }
  ];
}
