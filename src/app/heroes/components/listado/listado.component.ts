import { Component } from "@angular/core";

@Component({
    selector: "app-heroes-list",
    templateUrl: "listado.component.html"
})
export class ListComponent{
    heroNames: string[] = ["Ironman", "Superman", "Thor", "Yoda"]

    deletedHero?:string

    removeLastHero():void {
        this.deletedHero = this.heroNames.pop()
    }
}