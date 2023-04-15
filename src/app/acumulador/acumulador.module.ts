import { NgModule } from '@angular/core';
import { AcumuladorComponent } from './components/acumulador/acumulador.component';


@NgModule({
    //Esto significa que puedo utilizar el acumuladorcomponent dentro del scope de la carpeta acumulador, que contiene acumuladorModule.
    declarations: [AcumuladorComponent],
    exports: [AcumuladorComponent]
})
export class AcumuladorModule {

}