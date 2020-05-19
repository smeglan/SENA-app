import { Formaciones } from './../interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  // formaciones: Formaciones[] = [];

  constructor( private storage: Storage) {
  }

  guardarFormacion( formacion: Formaciones[]) {

    this.storage.set('favoritos', formacion);
    console.log(formacion);
  }
}
