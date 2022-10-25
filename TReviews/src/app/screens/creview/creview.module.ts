import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreviewPageRoutingModule } from './creview-routing.module';

import { CreviewPage } from './creview.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreviewPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreviewPage]
})
export class CreviewPageModule {}
