import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TarapotofullPage } from './tarapotofull.page';

const routes: Routes = [
  {
    path: '',
    component: TarapotofullPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TarapotofullPage]
})
export class TarapotofullPageModule {}
