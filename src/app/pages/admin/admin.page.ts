import { DataLocalService } from 'src/app/services/data-local.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {

  swiperOpts = {
    allowSlidePrev: false,
    allowSlidenext: false,
  };

  constructor(private barcodeScanner: BarcodeScanner, private dataLocal: DataLocalService) { }

  ionViewWillEnter() {
    console.log('ViewWillEnter');
    this.scan();
  }
  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if ( !barcodeData.cancelled ) {
        this.dataLocal.guardarRegistro( barcodeData.format, barcodeData.text);
      }
     }).catch(err => {
         console.log('Error', err);
         // this.dataLocal.guardarRegistro( 'QRcode', 'https://www.google.com');
         this.dataLocal.guardarRegistro( 'QRcode', 'geo:5.031389,-75.451262');
     });
  }

}
