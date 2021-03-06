import { Course } from 'src/app/interfaces/interfaces';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  courses: Course[] = [];
  constructor(
    private authSvc: AuthService,
    private firebaseService: FirebaseService,
    private router: Router
  ) {
    this.courses = this.firebaseService.getDataCourses();
  }

  openFilter() {
    console.log('Filtro');
    this.router.navigateByUrl('/filter');
  }
}
