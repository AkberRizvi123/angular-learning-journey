import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Importing BrowserModule is required for any Angular application that runs in a web browser. It provides the necessary services and directives for rendering components in the browser.
// BrowserModule is only supposed to be in the root module (AppModule) of the application. It should not be imported in feature modules (like TasksModule) to avoid issues with multiple instances of core services.

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // Components, directives, and pipes that belong to this module which are not standalone
  bootstrap: [AppComponent], // The root component that Angular creates with which to start and inserts into the index.html host web page
  imports: [BrowserModule, SharedModule, TasksModule], // Other modules whose exported classes are needed by component templates declared in this module and components which are standalone
  // no need to add DatePipe to imports as it is already provided by BrowserModule
})
export class AppModule {}
