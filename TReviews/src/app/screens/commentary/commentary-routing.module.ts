import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentaryPage } from './commentary.page';

const routes: Routes = [
  {
    path: '',
    component: CommentaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentaryPageRoutingModule {}
