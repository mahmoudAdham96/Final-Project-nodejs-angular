import { TodosService } from 'src/app/services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private todosService:TodosService) { }

  ngOnInit(): void {
  }
get errors (){
  return this.todosService.errors;
}
}
