import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
interface TaskItem {
    id: number;
    task: string;
}
@Component({
    selector:'app-two-do-list',
    templateUrl:'./two-do-list.html',
    styleUrl:'./two-do-list.css',
    imports:[FormsModule]
})


export class TwoDoList{
    task="";
    taskList:TaskItem[]=[];

    addTask():void{
        this.taskList.push({id:this.taskList.length+1, task:this.task});
        console.log(this.taskList);
        this.task="";
    }

    deleteTask(taskId:number){
        this.taskList = this.taskList.filter((item)=>item.id!=taskId);
    }
}