import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./Paginas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'formulario-aviso',
    loadComponent: () => import('./Paginas/formulario-aviso/formulario-aviso.page').then( m => m.FormularioAvisoPage)
  },
];
