import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent2 implements OnInit {

  // @Output() todoReady = new EventEmitter();
  
  constructor(
    private todosService: TodosService,
  ) { }


  todoTitle: string = ''

  ngOnInit(): void {
  }


  // createTodo() {
  //   const todo = {
  //     title: this.todoTitle,
  //     id: new Date().getTime(),
  //     completed: false
  //   }

  //   this.todosService.addTodo(todo);

  //   this.todoTitle = '';
  // }

}
