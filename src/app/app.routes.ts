import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'repertorio',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'liturgy',
    loadComponent: () =>
      import('./pages/liturgy/liturgy.page').then((m) => m.LiturgyPage),
  },
  {
    path: 'repertories',
    loadComponent: () =>
      import('./pages/repertories/repertories.page').then(
        (m) => m.RepertoriesPage
      ),
  },
  {
    path: 'repertorio',
    loadComponent: () =>
      import('./pages/repertorio/repertorio.page').then(
        (m) => m.RepertorioPage
      ),
  },
  {
    path: 'cancion',
    loadComponent: () =>
      import('./pages/cancion/cancion.page').then((m) => m.CancionPage),
  },
  {
    path: 'tema/:id',
    loadComponent: () =>
      import('./pages/cancion/cancion.page').then((m) => m.CancionPage),
  },
];