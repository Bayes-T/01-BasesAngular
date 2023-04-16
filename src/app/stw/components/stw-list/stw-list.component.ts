import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-stw-list',
  templateUrl: './stw-list.component.html',
  styleUrls: ['./stw-list.component.css']
})
export class StwListComponent {

  @Input()
  
  arrayPersonajes: Personaje[] = []
}
