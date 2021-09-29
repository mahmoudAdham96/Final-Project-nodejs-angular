import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authservice :AuthService
  ) { }

  ngOnInit(): void {
  }

  email:string ='';
  password:string= '';

  submit () {
    
    this.authservice.signin({
      email: this.email,
      password:this.password
    })
  }

}
