import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // The constructor is used to inject the TasksService into the component.
  constructor(private tasksService: TasksService) {}
  isAddingTask = false;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // handled from task.component.ts

  // onCompleteTask(id: string) {
  //   this.tasksService.removeTask(id);
  // }

  // handled from new-task.component.ts

  // onAddTask(newTaskData: NewTaskData) {
  //   //this.tasks.unshift adds the new task to the beginning of the array
  //   //this.tasks.push adds the new task to the end of the array
  //   // this.tasks.unshift({
  //   //   id: new Date().getTime().toString(),
  //   //   userId: this.userId,
  //   //   title: newTaskData.title,
  //   //   summary: newTaskData.summary,
  //   //   dueDate: newTaskData.dueDate,
  //   // });
  //   this.isAddingTask = false;
  // }
}
