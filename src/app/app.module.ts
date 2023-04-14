import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcumuladorComponent } from './acumulador/acumulador.component';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
