import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ToDoComponent } from './todo.component';

@NgModule({
  declarations: [ToDoComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [],
  exports: [ToDoComponent],
})
export class ToDoModule {}
