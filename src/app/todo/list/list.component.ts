import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {TodoService} from '../todo.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private todos: any = [];
  @Output() ediTodoItem = new EventEmitter();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.todos
      .subscribe(todos => this.todos = todos);
  }

  deleteTodo(todo){
    this.todoService.deleteTodo(todo);
  }

  editTodo(todo){
    this.todoService.editTodo(todo);
    this.ediTodoItem.emit(todo);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.todoService.todos.unsubscribe();
  }

}
