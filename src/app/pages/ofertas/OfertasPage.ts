import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonSegment, IonList, ToastController, ActionSheetController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Formaciones } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  @Input() formaciones: Formaciones;
  @ViewChild(IonSegment, { static: true })
  segment: IonSegment;
  @ViewChild('lista', { static: false })
  lista: IonList;
  textoBuscar = '';
  tipo = '';
  datos: Observable<any>;
  datos1: any[] = [];
  addFavorito: Formaciones[] = [];

  constructor(private dataService: DataService, private toastCtrl: ToastController,
              private socialSharing: SocialSharing, private storage: Storage, public http: HttpClient,
              private datalocalService: DataLocalService, private actionSheetCtrl: ActionSheetController) { }
  ngOnInit() {
    this.segment.value = 'Titulada';
    this.dataService.getDatos().subscribe(datos                 => {
      // console.log( datos );
      this.datos = this.dataService.getDatos();
    });
    // this.dataService.getDatos1().subscribe( datos1 => {
    //   this.datos1 = datos1;
    // });
    this.dataService.getDatos1().subscribe(res => {
      console.log(res);
    });
  }
  segmentChanged(event) {
    const valorSegmento = event.detail.value;
    if (valorSegmento === 'Titulada') {
      this.tipo = '';
    }
    this.tipo = valorSegmento;
    // console.log(valorSegmento);
  }
  buscar(event) {
    this.textoBuscar = event.detail.value;
  }
  // Lista
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  share(num1) {
    // this.presentToast('Compartido!');
    // this.lista.closeSlidingItems();
    this.socialSharing.share(num1)
      .then(() => {
        this.presentToast('Compartido!');
        this.lista.closeSlidingItems();
      }).catch(() => {
      });
  }
  favorite(par1, par2, par3, par4, par5) {
    this.addFavorito.push({
      title: par1,
      descripcion: par2,
      img: par3,
      id: par4,
      url: par5,
    });
    // this.datalocalService.guardarFormacion(this.addFavorito);
    // this.storage.set('favoritos', this.addFavorito);
    this.presentToast('Agregago a Favoritos');
  }

  async lanzarMenu(num1, num2, num3, num4, num5) {
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
        text: 'Favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          console.log('favorito');
          const existe = this.addFavorito.find( forma => forma.title === num1);
          if (!existe) {
          this.addFavorito.unshift({
            title: num1,
            descripcion: num2,
            img: num5,
            id: num4,
            url: num3,
          });
          this.datalocalService.guardarFormacion(this.addFavorito);
          // this.storage.set('favoritos', this.addFavorito);
          this.presentToast('Agregago a Favoritos');
        } else {
          this.presentToast('Ya se encuentra en favoritos');
        }
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
}
