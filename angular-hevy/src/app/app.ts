import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { routes } from './app.routes';
import { Http } from './core/services/http';

@Component({
  imports: [
    RouterOutlet,
    ToastModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [MessageService],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  private readonly _httpService = inject(Http);
  private readonly _messageService = inject(MessageService);
  private readonly _router = inject(Router);

  public apiKey?: string;
  public hasApiKey = computed(() => !!this._httpService.apiKey());

  public onApiKeyChange(): void {
    if (!this.apiKey) {
      this._messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'API key em branco. Por favor, insira uma chave de API válida.',
      });
      return;
    }

    this._httpService.apiKey.set(this.apiKey || '');
    this._router.navigateByUrl(routes[0].path!);
  }

}
