import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoStorage: any = [];
  private updatePosition: any;
  todos = new Subject<any>();
  constructor() { }
  addTodo(todo){
    this.todoStorage.push(todo);
    this.todos.next(this.todoStorage);
    console.log(this.todoStorage);
  }

  editTodo(todo: any){
    this.updatePosition = this.todoStorage.indexOf(todo);
  }

  deleteTodo(todo){
    const posTDel = this.todoStorage.indexOf(todo);
    this.todoStorage.splice(posTDel, 1);
    this.todos.next(this.todoStorage);
    console.log(this.todoStorage);
  }

  doEditTodo(todo){
    this.todoStorage[this.updatePosition] = todo;
    this.updatePosition = null;
  }
}
