import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AcumuladorModule } from './acumulador/acumulador.module';
import { heroesModule } from './heroes/heroes.module';
import { StwModule } from './stw/stw.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AcumuladorModule,
    heroesModule,
    StwModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
