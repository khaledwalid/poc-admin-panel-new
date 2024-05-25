import { Routes } from '@angular/router';

export const layoutRoutes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/schedule'
  },
  {
    path: 'schedule', pathMatch: 'full', loadComponent: () => import('./../../../features/schedule/pages/schedule-page/schedule-page.component')
      .then(comp => comp.SchedulePageComponent)
  },
];
