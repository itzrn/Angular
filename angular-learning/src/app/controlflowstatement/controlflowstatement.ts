import { Component } from "@angular/core";

@Component({
    selector:"app-controlflowstatement",
    styleUrl:"./controlflowstatement.css",
    templateUrl:"./controlflowstatement.html"
})

export class ControlFlowStatement{
    display:boolean=true;
    display1:boolean=true;

    hide():void{
        this.display1 = !this.display1;
    }

    color:number=1;
    color1:number=1;
    handleColor(val:number):void{
        this.color=val;
    }

    handleColor1(val:number):void{
        this.color1=val;
    }

    handleInput(event:Event):void{
        this.color = parseInt((event.target as HTMLInputElement).value);
    }

    arr:number[]=[1,2,3,4,5,6];
    students=[
        {name:'Anil', age:20},
        {name:'Aryan', age:20},
        {name:'Ashmit', age:20},
        {name:'Kumar', age:20},
    ];
}