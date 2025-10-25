import { Component } from "@angular/core";

@Component({
    selector:'app-button',
    templateUrl:'./button.html',
    styleUrl:'./button.css'
})

export class buttonComponent{
    handleClickEvent(){
        alert("Funtion call is Working");
        this.print(); // this keyword is used to call the other function 
        // this used bcz to tell compiler the function should be picked from the current instance
    }

    print(){
        console.log("Function Called");
    }

    sum(a:number, b:number):void{
        console.log(a+b);
    }
}