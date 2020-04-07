import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TrainingProgramComponent } from './training-program/training-program.component';
import { ProgramsComponent } from './programs/programs.component';

@NgModule({
  declarations: [MenuComponent, HeaderComponent, TrainingProgramComponent, ProgramsComponent ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    TrainingProgramComponent,
    ProgramsComponent
  ]
})
export class ComponentsModule { }
