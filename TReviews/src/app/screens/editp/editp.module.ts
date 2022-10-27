import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpPageRoutingModule } from './editp-routing.module';

import { EditpPage } from './editp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpPageRoutingModule
  ],
  declarations: [EditpPage]
})
export class EditpPageModule {}
