import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { Page404Component } from './pages/404/404-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: '404',
    component: Page404Component,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
