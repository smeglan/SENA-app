import { DataService } from 'src/app/services/data.service';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user.class';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  paisExpedicion = '';
  fechaExpedicion = '';

  avatars = [
    {
      img: 'sena.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: true
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];
  user: User = new User('', '');
  datos: any[] = [];
  constructor(private dataService: DataService, private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
    this.dataService.getpaises().subscribe( datos => {
      this.datos = datos;
    });
  }

  async onRegister(fregister: NgForm) {
    const user = await this.authSvc.onRegister(this.user);
    if (user) {
      console.log('Success');
      this.router.navigateByUrl('/');
    }
  }

}
