import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { loadTranslations } from '@angular/localize';

import { AppComponent } from './app.component';

async function initializeApp(): Promise<any> {
  const response = await fetch('/assets/ru.json');
  const { translations } = await response.json();
  loadTranslations(translations);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: () => initializeApp,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
