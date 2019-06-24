import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {TodoService} from '../todo.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  _isEditItem : any;
  _todoItemEdit : any;
  private todo: any;
  @Output() afterEdiTodoItem = new EventEmitter();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

get todoItemEdit(): any {
    return this._todoItemEdit;
 }

@Input()
set isEditItem(value: boolean) {
    this._isEditItem = value;
    /* console.log('previous item = ', this._isEditItem);
    console.log('currently selected item=', value);
    console.log(value, '@@@'); */
}

get isEditItem(): boolean {
  return this._isEditItem;
}

@Input()
set todoItemEdit(value: any) {
  this._todoItemEdit = value;
  this.todo = value;
  /* console.log('previous item = ', this._isEditItem);
  console.log('currently selected item=', value);
  console.log(value, '@@@'); */
}
  AddTodo(form:NgForm){
    const todo = form.value.todo;
    this.todoService.addTodo(todo);
  }

  EditTodo(form:NgForm){
    const todo = form.value.todo;
    this.todoService.doEditTodo(todo);
    this.afterEdiTodoItem.emit(todo);
    this.todo = '';
    this._isEditItem = false;

    console.log(todo);
  }

}
