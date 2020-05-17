import { Component, OnInit, ViewChild } from '@angular/core';
import {  ToastController, IonList } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {


  @ViewChild('lista', {static: false}) lista: IonList;

  textoBuscar = '';

  tipo = '';
  datos: any[] = [];

  title: any;

  addFavorito: any[] ;


  constructor(private dataService: DataService, private toastCtrl: ToastController,
              public http: HttpClient, private storage: Storage, private socialSharing: SocialSharing) {
                this.cargarFavoritos();
              }

  ngOnInit() {
     this.cargarFavoritos();
  }

  buscar( event ) {
    this.textoBuscar = event.detail.value;
  }

    // Lista
  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }



  share(num1) {
    // this.presentToast('Compartido!');
    // this.lista.closeSlidingItems();
    this.socialSharing.share(num1).then(() => {
      this.presentToast('Compartido!');
      this.lista.closeSlidingItems();

    }).catch(() => {

    });
  }

  async borrar(par1, par2, par3, par4, par5) {
       const  addFavorito = await this.storage.remove('favoritos');
       this. addFavorito =  addFavorito || [];
       return this. addFavorito;
   }
  //   //   // tslint:disable-next-line: align
  //   //   console.log(par4);
  //   }

  // // async cargarFavoritos() {
  // //   this.storage.get('favoritos')
  // //   .then(data => {
  // //     this.addFavorito = data;
  // //     console.log(data);
  // //   });

  async cargarFavoritos() {

    const  addFavorito = await this.storage.get('favoritos');
    this. addFavorito =  addFavorito || [];
    return this. addFavorito;
  }


}
