import { HttpClient } from '@angular/common/http';
import { effect, inject, Service, signal } from '@angular/core';

@Service()
export class Http {

  private readonly _httpClient = inject(HttpClient);

  public apiKey = signal(localStorage.getItem('apiKey') || '');

  constructor() {
    effect(() => {
      localStorage.setItem('apiKey', this.apiKey());
    });
  }

  public get<T>(url: string, params?: any) {
    return this._httpClient.get<T>(
      url,
      {
        headers: {
          'content-type': 'application/json',
          'api-key': this.apiKey(),
        },
        params,
      },
    );
  }

}
