import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  avatars = [
    {
      img: 'slidersena.png',
      seleccionado: true
    },
    {
      img: 'slides3sena.png',
      seleccionado: true
    }
];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

}
