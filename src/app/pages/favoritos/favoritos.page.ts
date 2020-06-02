import { Formaciones } from 'src/app/interfaces/interfaces';
import { Component, OnInit, ViewChild } from '@angular/core';
import {  ToastController, IonList, ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataService } from 'src/app/services/data.service';
import { DataLocalService } from 'src/app/services/data-local.service';

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
  favorito: Formaciones;
  addFavorito: Formaciones[] ;


  constructor(private dataService: DataService, private toastCtrl: ToastController,
              public http: HttpClient, private storage: Storage, private socialSharing: SocialSharing,
              private actionSheetCtrl: ActionSheetController, private datalocalService: DataLocalService) {
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
      duration: 3000
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
        this.addFavorito = this.addFavorito.filter( elm => elm.title !== par1);
        this.datalocalService.guardarFormacion(this.addFavorito);
        this.presentToast('Eliminado!');
  }


  async cargarFavoritos() {

    const  addFavorito = await this.storage.get('favoritos');
    if ( addFavorito ) {
    this.addFavorito =  addFavorito || [];
    } else {
      this.presentToast('No hay lista de favoritos');
    }
    return this.addFavorito;
  }
  async lanzarMenufav(num1, num2, num3, num4, num5) {
    const actionSheet = await this.actionSheetCtrl.create({
      // header: 'Add to favorites or share with your friends...',
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(num1, num2, '', num3);
        }
      }, {
        text: 'Eliminar',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Eliminar');
          this.borrar(num1, num2, num3, num4, num5);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        cssClass: 'action-red',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  perpararfavoritos() {
    console.log('Enviando correo...');
    this.datalocalService.perpararfavoritos(this.addFavorito);
  }


}
