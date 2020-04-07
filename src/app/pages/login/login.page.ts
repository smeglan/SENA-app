import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User(
    'fran@gmail.com',
    '12345678'
  );

  constructor(private authSvc: AuthService, private router: Router) {
  }

  ngOnInit() {
  }
  async onLogin() {
    const user = await this.authSvc.onLogin(this.user);
    if (user) {
      console.log('Success');
      this.router.navigateByUrl('/slides');
    }
  }

}
