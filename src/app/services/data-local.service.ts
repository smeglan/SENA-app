import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { async } from '@angular/core/testing';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Registro } from './../models/registro';
import { Formaciones } from './../interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  // formaciones: Formaciones[] = [];
  guardados: Registro[] = [];
  guardadoemail: Formaciones[] = [];
  constructor( private storage: Storage, private navCtrl: NavController,
               private inAppBrowser: InAppBrowser, private file: File,
               private emailComposer: EmailComposer) {
    // this.storage.get('registros')
    // .then( registros => {
    //   this.guardados = registros || [];
    // });
    this.cargarStorage();
  }

  async cargarStorage() {
    this.guardados = await this.storage.get('registros') || [];
  }

  async cargarStorageFavo() {
    this.guardadoemail = await this.storage.get('favoritos') || [];
    console.log(this.guardadoemail);
    return this.guardadoemail;
  }

  async guardarFormacion( formacion: Formaciones[]) {

    await this.cargarStorage();

    this.storage.set('favoritos', formacion);
    console.log(formacion);
  }
  async perpararfavoritos(formacion: Formaciones[]) {
      await this.cargarStorageFavo();
      const arrTemp = [];
      const Titulos = 'Id, Titulo, Url, Descripcion, Imagen\n';
      arrTemp.push( Titulos );
      console.log( 'email..' || this.perpararfavoritos);

      this.guardadoemail.forEach( registro => {
      const linea = `${ registro.id}, ${ registro.title}, ${registro.url}, ${registro.descripcion.replace(',', ' ')}, ${registro.img}\n`;
      arrTemp.push( linea );
    });
      this.crearArchivoFisico( arrTemp.join(''));
  }

  crearArchivoFisico(text: string) {
    this.file.checkFile( this.file.dataDirectory, 'registros.csv')
    .then( existe => {
      console.log('Existe archivo', existe);
      return this.escribirArchivo( text );
    })
    .catch( err => {
      return this.file.createFile(this.file.dataDirectory, 'registros.csv', false)
      .then( creado => this.escribirArchivo( text))
      .catch( err2 => console.log('No se pudo crear el archivo', err2));
    });
  }
  async escribirArchivo( text: string ) {
    await this.file.writeExistingFile( this.file.dataDirectory, 'registros.csv', text);
    const archivo = `${this.file.dataDirectory}/registros.csv`;
    const email = {
      to: 'franciscoaristizabalpadilla@gmail.com',
      // cc: 'erika@mustermann.de',
      // bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        archivo
      ],
      subject: 'Backup de formaciones',
      body: 'Aqui tienen sus formaciones, agregada a la lista de favoritos para que proceda con su <strong>inscripciòn</strong>',
      isHtml: true
    };
    // Send a text message using default options
    this.emailComposer.open(email);
  }
  // enviarCorreo() {
  //   const arrTemp = [];
  //   const Titulos = 'Id, Titulo, Url, Descripcion, Imagen\n';
  //   arrTemp.push( Titulos );
  //   console.log( 'email..' || this.perpararfavoritos);

  //   this.guardadoemail.forEach( registro => {
  //     const linea = `${ registro.id}, ${ registro.title}, ${registro.url}, ${registro.descripcion.replace(',', ' ')}, ${registro.img}\n`;
  //     arrTemp.push( linea );
  //   });
  //   console.log( arrTemp.join(''));
  // }
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
