import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private editItem = false;
  private todo: any;
  constructor() { }

  ngOnInit() {
  }

  editTodo(todo: any){
    this.editItem = true;
    this.todo = todo;
    console.log('before edit');
  }

  afterEditTodo(todo: any){
    this.editItem = false;
    console.log('after edit done');
  }

}
