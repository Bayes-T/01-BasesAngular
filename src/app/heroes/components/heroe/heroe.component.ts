import { Component } from '@angular/core';

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent {

    nombre:string = "Superman"
    edad:number = 45

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase()
    }

    mostrarNombre():string{
       return  `El héroe ${this.nombre} tiene ${this.edad}`
    }

    cambiarHeroe():void{
        this.nombre = "Yoda"
    }

    cambiarEdad():void{
        this.edad = -500
    }

    restablecer():void {
        this.nombre = "Superman"
        this.edad = 45
    }
}