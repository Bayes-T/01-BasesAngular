import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { StwService } from '../services/stw.service';


@Component({
    selector: 'app-stw-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
    //crea una propiedad name en nuestro componente, pero en angular
    //constructor(private name:string)

    //pero en angular se puede usar para los servicios
   constructor(private stwService : StwService){}
   //habilita en todo el componente del mainpage toda la información que esté en el componente

   //stwService (minusc) es un objeto con propiedades en esta clase, por lo que lo uso en el html del componente donde lo inyecte

   //ahora este getter lo voy a usar en el html
   get characters(): Personaje[]{
    return [...this.stwService.personajes]
   }

   //uso metodo, porque los getters deben retornar algo
   //Y esta función es la que uso en el html
   onDeleteCharacter(id:string):void {
    this.stwService.deleteById(id)
   }

   onNewCharacterPrivate(character:Personaje){
    this.stwService.onNewCharacter(character)
   }

   //en el html está onnewcharacter= onnewcharacterprivate()
   //¿¿DONDE ESTÁ LA FUNCIÓN onNewCharacter??? (EN SERVICES) y POR QUE SE USA ASÍ, TIPO EVENTO Y CON DOS FUNCIONES? REPASAR
}