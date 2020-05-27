import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'admin', loadChildren: './pages/admin/admin.module#AdminPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'filter', loadChildren: './pages/filter/filter.module#FilterPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'slides', loadChildren: './pages/slides/slides.module#SlidesPageModule' },
  { path: 'ofertas',
    loadChildren: './pages/ofertas/ofertas.module#OfertasPageModule'
  },
  { path: 'favoritos', loadChildren: './pages/favoritos/favoritos.module#FavoritosPageModule' },
  { path: 'mapa', loadChildren: './pages/mapa/mapa.module#MapaPageModule' },
  { path: 'mapageo/:geo', loadChildren: './pages/mapageo/mapageo.module#MapageoPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
