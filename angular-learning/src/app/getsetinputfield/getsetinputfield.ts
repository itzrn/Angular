import { Component } from "@angular/core";

@Component({
    selector:"app-getsetinputfield",
    templateUrl:"./getsetinputfield.html",
    styleUrl:"./getsetinputfield.css"
})

export class GetSetInputField{
    name:string="";
    getName(event:Event){
        const name = (event.target as HTMLInputElement).value;
        // console.log(name);
        this.name=name;
    }

    displayName:string="";
    showName():void{
        this.displayName=this.name;
    }
    setName():void{
        this.name="Aryan";
    }
    email:string="";
    getEmail(val:string):void{
        console.log(val);
        this.email=val;
    }

    stemail:string="";
    setEmail():void{
        this.stemail="rmishu@gmail.com"
    }
}