import { USER } from './../interfaces/user.interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  setUser(userData:USER , token:string){
    window.localStorage.setItem('user', JSON.stringify(userData))
    window.localStorage.setItem('token', `Bearer ${token}`)
  }
  getUser(){
    const userData =window.localStorage.getItem('user');
    if(!userData) return null ;
    return JSON.parse(userData);
  }
  getToken(){
    return window.localStorage.getItem('token')!
  }

  isLoggedIn():boolean {
    return !!this.getUser()
  }

  clear (){
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
  }
}
