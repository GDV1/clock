import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HourComponent } from './hour/hour.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HourComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
