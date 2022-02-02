import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userS: UserService) { }

  ngOnInit(): void {
  }
  onRegister(data:{username: string, password: string, email: string, phone: string})
  {
    this.userS.register(data.username, data.password, data.email, data.phone).subscribe(data=>{

    })
  }
}
