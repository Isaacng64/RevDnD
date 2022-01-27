import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor() { }
  @Input()
  user!: User;
  ngOnInit(): void {
  }
  onUpdate(data:{username: string, password: string, email: string, phone: string})
  {
    if(data.username=="")
    {
      data.username=this.user.username;
    }
    if(data.password=="")
    {
      data.password=this.user.password;
    }
    else{
      if
    }
    if(data.email=="")
    {
      data.email=this.user.password;
    }
    if(data.password=="")
  }
}
