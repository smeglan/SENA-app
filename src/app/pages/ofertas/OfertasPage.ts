import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonList, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {
  @ViewChild(IonSegment, { static: true })
  segment: IonSegment;
  @ViewChild('lista', { static: false })
  lista: IonList;
  textoBuscar = '';
  tipo = '';
  datos: Observable<any>;
  datos1: any[] = [];
  addFavorito = [];

  constructor(private dataService: DataService, private toastCtrl: ToastController,
              private socialSharing: SocialSharing, private storage: Storage, public http: HttpClient) { }
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
    this.storage.set('favoritos', this.addFavorito);
    this.presentToast('Agregago a Favoritos');
  }
}
