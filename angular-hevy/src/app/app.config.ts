import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura
      },
      license: 'eyJpZCI6IjAxMjRiYjk5LTdmM2UtNGEyZi1hMGY3LWVkNzlkZGU5N2ZiZiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3OTAwMDQ2NTIsImV4cCI6MTgyMTU0MDY1Mn0.7u7F2o6mns9yQkDAfr0i7opDrFuXS0dV6qWP8OATHNwCroYTZryLkfBliMapFDVv-iLgGy6t-dJETkTfLDmoDA',
    }),
  ]
};
