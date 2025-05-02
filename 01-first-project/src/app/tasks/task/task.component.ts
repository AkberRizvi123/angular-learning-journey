import { Component,Input, inject } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component"; //importing the task model from task.model.ts
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  private tasksService = inject(TasksService);
  @Input({required:true}) task!: Task;
  // @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
    // this.complete.emit(this.task.id);
  }
}
