import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  avatars = [
    {
      img: 'slides1sena.png',
      seleccionado: true
    },
    {
      img: 'slides5sena.png',
      seleccionado: true
    }
];
  constructor() { }

  ngOnInit() {
  }

}
