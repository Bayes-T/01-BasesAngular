import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { StwListComponent } from './components/stw-list/stw-list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent, StwListComponent, AddCharacterComponent],
  exports:[MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StwModule { }
