import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CashInflowComponent } from './cash-inflow.component';

const routes: Routes = [
  {
    path: '',
    component: CashInflowComponent
  }
];

@NgModule({
  declarations: [
    CashInflowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CashInflowModule { }
