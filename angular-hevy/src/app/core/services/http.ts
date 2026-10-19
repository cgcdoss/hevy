import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { effect, inject, Service, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, EMPTY } from 'rxjs';

@Service()
export class Http {

  private readonly _httpClient = inject(HttpClient);
  private readonly _messageService = inject(MessageService);

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
    ).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.clearApiKey();
          this._messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'API key inválida. Por favor, insira uma chave de API válida.',
          });
        }

        return EMPTY;
      }),
    );
  }

  public clearApiKey(): void {
    localStorage.removeItem('apiKey');
    this.apiKey.set('');
  }

}
