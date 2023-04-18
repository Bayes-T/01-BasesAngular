import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
//Event emitter es un genérico, especificamos que el tipo de dato es un objeto tipo personaje
  @Output()
  onNewCharacter:EventEmitter<Personaje> = new EventEmitter()

  character:Personaje = {
    name:"",
    power:0
  }

  emitCharacter():void {

    if (this.character.name.length === 0) return
    if (this.character.power <0 ) return

    this.onNewCharacter.emit(this.character)

    this.character = {name: "", power:0}
  }
}
