import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';


@Component({
    selector: 'app-stw-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
    personajes:Personaje[] = [{
    name: "Yoda",
    power: 500
    },
    {name: "Anakin",
    power:400},
    {name: "Baby Yoda",
    power: 2000}
]
}