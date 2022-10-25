import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreviewPage } from './creview.page';

const routes: Routes = [
  {
    path: '',
    component: CreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreviewPageRoutingModule {}
