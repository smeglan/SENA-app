import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Registro } from './../models/registro';
import { Formaciones } from './../interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  // formaciones: Formaciones[] = [];
  guardados: Registro[] = [];
  constructor( private storage: Storage, private navCtrl: NavController, private inAppBrowser: InAppBrowser) {
    // this.storage.get('registros')
    // .then( registros => {
    //   this.guardados = registros || [];
    // });
    this.cargarStorage();
  }

  async cargarStorage() {
    this.guardados = await this.storage.get('registros') || [];
  }

  async guardarFormacion( formacion: Formaciones[]) {

    await this.cargarStorage();

    this.storage.set('favoritos', formacion);
    console.log(formacion);
  }

  async guardarRegistro( format: string, text: string) {
    await this.cargarStorage();
    const nuevoRegistro = new Registro(format, text);
    this.guardados.unshift(nuevoRegistro);

    console.log(this.guardados);
    this.storage.set('registros', this.guardados);
    this.abrirRegistro( nuevoRegistro );
  }

  abrirRegistro(registro: Registro) {
    this.navCtrl.navigateForward('/mapa');
    switch (registro.type ) {
      case 'http':
      this.inAppBrowser.create( registro.text, '_system' );
      break;
      case 'geo':
      this.navCtrl.navigateForward( `/mapageo/${ registro.text}`);
      break;
    }
  }
}
