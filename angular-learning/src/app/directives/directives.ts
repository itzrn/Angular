import { Component } from "@angular/core";
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";

interface Data{
    id:number,
    name:string
}

@Component({
    selector:'app-directives',
    templateUrl:'./directives.html',
    imports:[NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault]
})


export class Directives{
    show:boolean=false;

    // ngFor
    students:string[]=['petter', 'vinay','Aryan','Manoj', 'Ashmit', 'Dharamendra', 'ishika', 'Divya', 'Kamini'];

    datas:Data[]=[
        {
            id:10,
            name:'Aryan'
        },
        {
            id:10,
            name:'Aryan'
        },
        {
            id:10,
            name:'Aryan'
        },
        {
            id:10,
            name:'Aryan'
        }
    ];


    login:boolean=true; // change true or false to look on page


    // ngswitch
    color="a";
}