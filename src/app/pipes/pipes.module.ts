import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { FiltroSegmentoPipe } from './filtro-segmento.pipe';


@NgModule({
  declarations: [FiltroPipe, FiltroSegmentoPipe],

  exports: [FiltroPipe,  FiltroSegmentoPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
