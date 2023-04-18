import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-stw-list',
  templateUrl: './stw-list.component.html',
  styleUrls: ['./stw-list.component.css']
})
export class StwListComponent {


  //Como stwlist es componente hijo de stwmainpage, y este ya recibe servicios no necesito volverlos a inyectar!!
  @Input()
  
  arrayPersonajes: Personaje[] = []

  @Output()
  onNewDelete:EventEmitter<string> = new EventEmitter()





  //Creo que ya lo tengo asociado al definir el indice en el ngfor, aunque ahi se llama i y acá index??
  //Creo que esta es una función que sirve sólo como modelo, lo que se envía en realidad es lo que puse en ondelete character, ahi si se llama i 
  emitirDelete(id:string):void{
    this.onNewDelete.emit(id)
  }
}
