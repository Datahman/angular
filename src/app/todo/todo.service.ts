import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';

import { ToDoItem } from './todo-item';

@Injectable()
export class ToDoService {
  form: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      addItemTextForm: new FormControl('', Validators.required),
    });
  }
  getItems(): ToDoItem[] {
    return toDoItems;
  }

  get addTextAreaFormHasError() {
    return isNullOrUndefined(this.form.get('addItemTextForm').errors)
      ? false
      : this.form.get('addItemTextForm').errors['required'];
  }

  get addItemTextForm() {
    return this.form.get('addItemTextForm') as FormControl;
  }
}

const toDoItems: ToDoItem[] = [{ name: 'Item 1' }, { name: 'Item 2' }];
