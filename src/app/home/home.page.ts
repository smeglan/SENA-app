import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  
  constructor(
    private authSvc: AuthService, 
    private router: Router, 
    private afAuth: AngularFireAuth,
    private firebaseService : FirebaseService
  ) {}

  loadTestJson(){
    this.firebaseService.getData();
  }

  onLogout(){
    console.log('Logout!');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/');
    return;
  }
}
