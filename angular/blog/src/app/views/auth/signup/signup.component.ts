import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }
  ngOnInit(): void {
  }
  name:string = ''
  email:string = ''
  password:string = ''

  submit(){

    this.authService.signup({
      name:this.name,
      email:this.email,
      password:this.password
    })
  }

}
