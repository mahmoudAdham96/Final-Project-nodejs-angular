import { TodoFormComponent } from './views/todos/todo-form/todo-form.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { DefaultBarComponent } from './components/bars/default-bar/default-bar.component';
import { DefaultFooterComponent } from './components/footers/default-footer/default-footer.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { ActionBarComponent } from './components/bars/action-bar/action-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    DefaultBarComponent,
    DefaultFooterComponent,
    NotfoundComponent,
    SignupComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoFormComponent,
    ActionBarComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
