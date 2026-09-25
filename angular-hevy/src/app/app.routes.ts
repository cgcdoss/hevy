import { Routes } from '@angular/router';
import { apiKeyGuard } from './guards/api-key-guard';

export const routes: Routes = [
  {
    path: 'workouts',
    loadComponent: () => import('./pages/workout-list/workout-list').then((m) => m.WorkoutList),
    canActivate: [apiKeyGuard],
  },
  {
    path: 'workout/:id',
    loadComponent: () => import('./pages/workout-detail/workout-detail').then((m) => m.WorkoutDetail),
    canActivate: [apiKeyGuard],
  },
  {
    path: '',
    redirectTo: '/workouts',
    pathMatch: 'full',
  },
];
