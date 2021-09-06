import { Component, OnInit } from '@angular/core';
import { SpeedDialFabPosition } from './speed-dial-fab-button/speed-dial-fab-button.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public speedDialFabButtons = [
    {
      icon: 'timeline',
      tooltip: 'Do some timeline here'
    },
    {
      icon: 'view_headline',
      tooltip: 'Do some headline here'
    },
    {
      icon: 'room',
      tooltip: 'get some room here'
    },
    {
      icon: 'lightbulb_outline',
      tooltip: 'Do some outline here'
    },
    {
      icon: 'lock',
      tooltip: 'Do lock down'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  SpeedDialFabPosition = SpeedDialFabPosition;
  speedDialFabColumnDirection = 'column';
  speedDialFabPosition = SpeedDialFabPosition.Top;
  speedDialFabPositionClassName = 'speed-dial-container-top';

  onPositionChange(position: SpeedDialFabPosition) {
    switch(position) {
      case SpeedDialFabPosition.Bottom:
        this.speedDialFabPositionClassName = 'speed-dial-container-bottom';
        this.speedDialFabColumnDirection = 'column-reverse';
        break;
      default:
        this.speedDialFabPositionClassName = 'speed-dial-container-top';
        this.speedDialFabColumnDirection = 'column';
    }
  }

  onSpeedDialFabClicked(btn: {icon: string}) {
    console.log(btn);
  }

}
