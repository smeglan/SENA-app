import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {

    // tslint:disable-next-line: triple-equals
    if (texto == '') {
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter( item => {
      return item.title.toLowerCase().includes( texto );
    });
  }

}
