import { Component } from "@angular/core";

@Component({
    selector:'app-events',
    templateUrl:'./events.html',
    styleUrl:'./events.css'
})

export class EventsComponent{
    handleEvent(event:Event){ // here the actual type will be MouseEvent
        console.log("function called ",event.type);
        // console.log(event.target.name); // use when it is any
        // with the help of target you can access all attribut values of any event
        // console.log(event.target.class); // use when it is any
        console.log((event.target as Element).classList)

        // to get the input geven on the html
        console.log("value", (event.target as HTMLInputElement).value);
    }
}