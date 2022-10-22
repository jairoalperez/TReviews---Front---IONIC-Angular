import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    TabsComponent
  ],
  exports: [
    TabsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
