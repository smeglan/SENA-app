import { Component, OnInit } from '@angular/core';
import { ComponentMenu } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  components: ComponentMenu[] = [{
    "icon": "menu",
    "name": "Administrador",
    "redirectTo": "/admin"
  }];
  constructor() { }

  ngOnInit() {}

}
