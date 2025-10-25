import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-twowaybinding',
    imports:[FormsModule],
    templateUrl:'./twowaybinding.html',
})

export class TwoWayBinding{
    data:string="";
}