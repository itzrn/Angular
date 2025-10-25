import { Component, effect, signal } from "@angular/core";

@Component({
    selector:"app-effects",
    styleUrl:"./effects.css",
    templateUrl:"./effects.html"
})

export class EffectsLearning{
    userName=signal('Anil');
    count=signal(1);
    display:boolean=false;
    constructor(){
        effect(()=>{
            console.log(this.userName());
            if((this.count()&1) == 1){
                this.display=true;
                setTimeout(() => {
                    this.display=false;
                    
                }, 2000);
            }else{
                this.display=false;
            }
        });
    }

    toggleValue():void{
        this.count.set(this.count()+1);
        
    }
}