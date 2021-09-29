import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Todo } from './../interfaces/todo.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient,
  private userService:UserService,
  private router:Router
    ) {}
    errors:string[]=[]

  todos: Todo[] = [];

  getTodoById(id:string){
    return this.todos.find(todo => todo._id == id)
  }

  baseUrl:string = 'http://localhost:3000/todos'

  get defaultOptions (){
    return {
      headers:{
        authorization:this.userService.getToken(),
      },
    };
}
ErrorMsg(msg:string){
  this.errors.push(msg);
  setTimeout(()=> {
    const errIndex = this.errors.indexOf(msg);
    this.errors.splice(errIndex,1);
  } , 1500);


}

  fetchTodos() {
    this.http.get<{
      todos:Todo[]
    }>(`${this.baseUrl}/gettodos`, this.defaultOptions).subscribe(
        (data) => this.todos = data.todos,
       err=>{
         this.ErrorMsg( 'Failed to Fetch Todos')
       } 

      );
  }
      createTodo(data:{title:string}){
this.http.post(`${this.baseUrl}/createtodo`,data, this.defaultOptions).subscribe(
  (data) =>{ 
  this.router.navigateByUrl('/')
  },
  err=>{
         this.ErrorMsg( 'Failed to Create Todos')
       }
  );
}
updateTodo(id:string ,data:{title:string}){
  this.http.put(`${this.baseUrl}/updateTodo/${id}`,data , this.defaultOptions).subscribe(
    (data)=>{

      this.router.navigateByUrl('/')
    },
    err=>{
      this.ErrorMsg( 'Failed to Update Todos')
    }
      )
 
  }

  deleteTodo(id:string){
    this.http.delete(`${this.baseUrl}/deletetodo/${id}`, this.defaultOptions).subscribe(
      (data)=>{
        const todoIndex = this.todos.findIndex(tod => tod._id == id)
        if(todoIndex == -1)return

        this.todos.splice(todoIndex,1)
      },
      err=>{
        this.ErrorMsg( 'Failed to delte Todos')
      }
      
      )
    }
      
 }
