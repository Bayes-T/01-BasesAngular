import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ListComponent } from './components/listado/listado.component';


@NgModule({
   declarations:[HeroeComponent, ListComponent],
   exports: [HeroeComponent, ListComponent],
   imports: [CommonModule]
    
})
export class heroesModule{

}