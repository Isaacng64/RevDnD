

import { AuthService } from '../_services/auth.service';

import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms' 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}

/*
  constructor(private userS: UserService) { }

  ngOnInit(): void {
  }
  onRegister(data:{username: string, password: string, email: string, phone: string})
  {
    this.userS.register(data.username, data.password, data.email, data.phone).subscribe(data=>{
      
    })
  }
}
*/

