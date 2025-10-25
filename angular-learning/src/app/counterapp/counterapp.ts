import { Component } from "@angular/core";

@Component({
    selector:'app-counterapp',
    templateUrl:'./counterapp.html',
    styleUrl:'./counterapp.css'
})

export class counterApp{
    count:number=0;

    increment():void{
        this.count=this.count+1;
    }
    decrement():void{
        this.count=this.count-1;
    }
    reset():void{
        this.count=0;
    }

    handleCounter(val:string){
        if(val=='minus'){
            this.decrement();
        }else if(val=='plus'){
            this.increment();
        }else{
            this.reset();
        }
    }
}
