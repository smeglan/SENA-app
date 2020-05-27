import { DataLocalService } from 'src/app/services/data-local.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(public dataLocal: DataLocalService) { }

  ngOnInit() {
  }
  enviarCorreo() {
    console.log('Enviando correo...');
  }

  abrirRegistro( registro ) {
    console.log('Registro', registro);
    this.dataLocal.abrirRegistro( registro );
  }

}
