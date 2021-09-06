import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { TransactionsComponent } from './transactions.component';
import { SpeedDialFabButtonComponent } from './speed-dial-fab-button/speed-dial-fab-button.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent
  }
];

@NgModule({
  declarations: [
    TransactionsComponent,
    SpeedDialFabButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule
  ]
})
export class TransactionsModule { }
