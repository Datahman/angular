import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ToDoItem } from './todo-item';
import { ToDoService } from './todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ToDoService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoComponent {
  items: ToDoItem[] = [];

  constructor(public todoService: ToDoService) {
    this.items = this.todoService.getItems();
  }

  deleteItem(currentItemIndex: number) {
    this.items.splice(currentItemIndex, 1);
  }

  addItem(): void {
    if (!(this.todoService.addItemTextForm.value as string).length) {
      throw new Error('Empty item name provided!');
    }

    const itemName: string = this.todoService.addItemTextForm.value as string;
    this.items.push({ name: itemName });

    this.todoService.form.reset();
  }
}
