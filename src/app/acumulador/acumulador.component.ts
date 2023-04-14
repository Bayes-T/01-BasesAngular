import {Component} from '@angular/core'

@Component({
    selector: "app-acumulador",
    template: `
    <h1>{{title}}</h1>

<h3>La base es {{base}}</h3>

<button (click)="adicionar(base)"> -{{base}} </button>

<span>{{numero}}</span>

<button (click)="adicionar(-base)" > +{{base}} </button>

    `
})
export class AcumuladorComponent{

    title:string = 'Acumulador App';
    numero:number = 0
    base:number = 5
  
    //operacion(valor:number){
    //  valor == 1 ? this.numero += 1 : this.numero-=1
    //}
  
    adicionar(valor:number){
      this.numero += valor
    }

}