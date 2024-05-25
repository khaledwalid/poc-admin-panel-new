import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'schedule'
  },
  {
    path: 'schedule', pathMatch: 'full', loadComponent: () => import('./features/schedule/pages/schedule-page/schedule-page.component')
      .then(comp => comp.SchedulePageComponent),
    providers: [
      importProvidersFrom(ModalModule.forRoot())
    ]
  },
  {
    path: 'profile', pathMatch: 'full', loadComponent: () => import('./features/profile/pages/profile-page/profile-page.component')
      .then(comp => comp.ProfilePageComponent)
  },
  {
    path: 'settings', pathMatch: 'full', loadComponent: () => import('./features/settings/pages/settings-page/settings-page.component')
      .then(comp => comp.SettingsPageComponent)
  },
];

// export const routes: Routes = [
//   {
//     path: '', pathMatch: 'full', loadChildren: () => import('./layout/pages/layout-page/layout.routes')
//       .then(route => route.layoutRoutes)
//   },
// ];

// export const routes: Routes = [
//   {
//     path: '', pathMatch: 'full', loadComponent: () => import('./layout/pages/layout-page/layout-page.component')
//       .then(comp => comp.LayoutPageComponent)
//   },
// ];