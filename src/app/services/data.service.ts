import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import 'firebase/messaging';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private db: AngularFirestore ) { }

  getDatos() {
    return this.http.get<any[]>('https://appsena-622d5.firebaseio.com/programasFormacion.json');
  }
  getDatos1() {
    return this.http.get<any[]>('https://appsena-622d5.firebaseio.com/programasFormacion.json');
  }
  getpaises() {
    return this.http.get<any[]>('https://appsena-622d5.firebaseio.com/paises.json');
  }

  getUsuario() {
    return this.db.collection('users').snapshotChanges();

  }

}
