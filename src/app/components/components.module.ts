import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [MenuComponent, HeaderComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
