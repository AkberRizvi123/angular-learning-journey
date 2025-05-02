import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // CommonModule is imported to use common directives like datepipe,ngIf, ngFor, etc.

import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms'; // Importing FormsModule is required for using Angular's template-driven forms

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent], // Components, directives, and pipes that belong to this module which are not standalone
  exports: [TasksComponent], // Components, directives, and pipes that can be used in the component templates of other modules
  imports: [CommonModule, FormsModule, SharedModule], // Other modules whose exported classes are needed by component templates in this module
})
export class TasksModule {}
