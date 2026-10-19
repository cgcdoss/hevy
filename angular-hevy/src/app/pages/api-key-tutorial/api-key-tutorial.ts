import { Component, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
  imports: [
    StepperModule,
    ButtonModule,
  ],
  selector: 'app-api-key-tutorial',
  styleUrl: './api-key-tutorial.css',
  templateUrl: './api-key-tutorial.html',
})
export class ApiKeyTutorial {

  public onApiKeyPasteEv = output<string>();

  public async onApiKeyPaste() {
    const apiKey = await this._getApiKeyFromClipboard();
    if (apiKey) {
      this.onApiKeyPasteEv.emit(apiKey);
    }
  }

  private async _getApiKeyFromClipboard() {
    const clipboardData = await navigator.clipboard.readText();
    return clipboardData.trim() || null;
  }

}
