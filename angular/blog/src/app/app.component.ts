import { Component } from '@angular/core';

// const {Component} = require('@angular/core');
type USER_TYPE = 'admin' | 'client' | 'publisher';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Publishers';
  subTitle = 'Hello';

  isHomePage = true;

  isHeader = true;

  pageTitle() {
    return 'This Is Page Title';
  }

  pageContentClasses() {
    return this.isHomePage ? 'header title bold static' : 'subheader';
  }

  showPassword = false;

  // !false => true

  // !showPassword => true

  // showPassword = !showPassword => true

  // !true => false

  // !showPassword => false

  // showPassword = !showPassword => false

  togglePasswordView() {
    this.showPassword = !this.showPassword;
  }

  classes() {
    return {
      header: this.isHeader,
      bold: this.isHeader,
      underline: this.isHeader,
      subHeader: !this.isHeader,
      italic: !this.isHeader,
    };
  }

  styles() {
    return {
      color: this.isHeader ? 'skyblue' : 'green',
      fontSize: this.isHeader ? '2rem' : '1.5rem',
      fontWeight: this.isHeader ? 'bold' : '500',
      textDecoration: this.isHeader ? 'underline' : 'none',
      fontStyle: this.isHeader ? 'none' : 'italic',
    };
  }

  password = '13454354';
  email = '';

  // updatePassword(e: KeyboardEvent) {
  //   const target = e.target as HTMLInputElement;
  //   this.password = target.value;

  //   console.log(this.password)
  // }

  // updatePassword(input: HTMLInputElement) {
  //   this.password = input.value;

  //   console.log(this.password)
  // }

  isLoggedIn = false;

  toggleSigninState() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  // userType: USER_TYPE = 'publisher';
  userType = 'admin';


  todoTitle: string = '';
  todos: { title: string; id: number, completed: boolean }[] = [
    {
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
    {
      id: 6,
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
      completed: false,
    },
    {
      id: 7,
      title: 'illo expedita consequatur quia in',
      completed: false,
    },
    {
      id: 8,
      title: 'quo adipisci enim quam ut ab',
      completed: true,
    },
    {
      id: 9,
      title: 'molestiae perspiciatis ipsa',
      completed: false,
    },
    {
      id: 10,
      title: 'illo est ratione doloremque quia maiores aut',
      completed: true,
    },
  ];

  addTodo() {
    // get todoTitle Value // this.todoTitle
    // create todo with todoTitle Value
    const todo = {
      title: this.todoTitle,
      id: new Date().getTime(),
      completed: false
    }
    // push new todo to todos array
    this.todos.push(todo);
    this.todoTitle = '';
  }

  deleteTodo(id: number) {
    const todoIndex = this.todos.findIndex(todo => todo.id == id);
    if (todoIndex > -1) {
      this.todos.splice(todoIndex, 1)
    }
  }


  date = new Date();
}
