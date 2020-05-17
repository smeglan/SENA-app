import { Component, OnInit } from '@angular/core';
import { ComponentMenu } from 'src/app/interfaces/interfaces';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  components: ComponentMenu[] = [{
    "icon": "home",
    "name": "Principal",
    "redirectTo": "/ofertas"
  },
  {
    "icon": "people",
    "name": "Codigo QR",
    "redirectTo": "/admin"
  },
  {
    "icon": "star",
    "name": "Favoritos",
    "redirectTo": "/favoritos"
  }
  ];

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() { }

  onLogout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/');
    return;
  }
}
