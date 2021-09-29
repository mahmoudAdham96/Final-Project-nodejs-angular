import { TodosService } from '../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(
    private todosService:TodosService
  ) {

  }
  
  

  ngOnInit(): void {
    this.todosService.fetchTodos();
  }

  get todos():Todo[]{
    return this.todosService.todos;
  }


}
