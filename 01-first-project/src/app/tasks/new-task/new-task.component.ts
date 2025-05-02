import {
  Component,
  Output,
  EventEmitter,
  signal,
  inject,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
// new task created
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // alternative to constructor(private tasksService: TasksService) {}
  // using inject() function to inject the TasksService into the component
  private tasksService = inject(TasksService);
  @Input({ required: true }) userId!: string;
  @Output() closeDialog = new EventEmitter<void>();

  // using two way data binding to bind the input fields to the component properties using Zone.js state management
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  /* using two way data binding to bind the input fields to the component properties using Signals
  [(ngModel)]="enteredTitle" this syntax remains the same for both Zone.js and Signals
  */
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');
  onCancel() {
    this.closeDialog.emit();
  }
  
  OnSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle, //this.enteredTitle() for Signals
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.userId
    );
    this.closeDialog.emit();
  }
}
