import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpPage } from './editp.page';

const routes: Routes = [
  {
    path: '',
    component: EditpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpPageRoutingModule {}
