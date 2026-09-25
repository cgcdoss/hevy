import { CanActivateFn } from '@angular/router';
import { Http } from '../core/services/http';
import { inject } from '@angular/core';

export const apiKeyGuard: CanActivateFn = (route, state) => {
  const httpService = inject(Http);

  if (!httpService.apiKey()) {
    return false;
  }

  return true;
};
