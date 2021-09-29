import { TodosService } from '../../services/todos.service';
import { Todo, defaultTodo } from './../../interfaces/todo.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
@Input() todo:Todo = defaultTodo;

  constructor(
    private todosService :TodosService
  ) { }

  ngOnInit(): void {
  }

  deleteTodo(){
this.todosService.deleteTodo(this.todo._id)
  }



}
