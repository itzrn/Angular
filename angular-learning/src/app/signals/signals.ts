import { Component, computed, effect, Signal, signal, WritableSignal } from "@angular/core";

@Component({
    selector:"app-signals",
    styleUrl:"./signals.css",
    templateUrl:"./signals.html"
})

export class SignalsComponent{
    count=signal(10);
    constructor(){
        effect(()=>{
            console.log("count change hua hai -> ",this.count()); // if i am using here this.x it will not show on the console
            // but for signals it will work
        });
    }

    updateValue(){
        this.count.set(this.count()+1);
    }

    data : WritableSignal<number|string>=signal<number | string>(10);
    // here defining the data type of signal
    updateData():void{
        this.data.set("Aryan"); // we can also use update method but it have very limited use, only used when one data type is used
    }

    // story variable is not updateable, bcz it is computed
    story:Signal<number|string> = computed(()=>{
        return 200;
    });





    // computed Signals
    x=signal(10);
    y=signal(20);
    z=computed(()=>{return this.x()+this.y()});

    showValue(){
        this.x.set(100);
    }
}