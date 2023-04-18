import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import {v4 as uuid} from "uuid"

@Injectable({providedIn: 'root'})
export class StwService {
    personajes:Personaje[] = [{
        id: uuid(),
        name: "Yoda",
        power: 500
        },
        {
        id: uuid(),
        name: "Anakin",
        power:400},
        {   id: uuid(), 
            name: "Baby Yoda",
            power: 2000}
    ]
        onNewCharacter(character:Personaje):void{
            const newCharacter:Personaje = {
                id: uuid(),
                name: character.name,
                power: character.power
                //en lugar de name y power puedo poner id:uuid(), ...character y listo :)
            }
            this.personajes = [...this.personajes, newCharacter]
        }
    
        deleteById(id:string){
            //this.personajes.splice(index,1)
            this.personajes = this.personajes.filter(personaje => personaje.id !== id)
        }
    
}