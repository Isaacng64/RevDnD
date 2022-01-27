import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private userService: UserService) { }
 
  message:string="";
   @Input() user!: User;
  ngOnInit(): void {
  }
  onUpdate(data:{username: string, password: string, email: string, phone: string})
  {
    this.message="";
    if(data.username=="")
    {
      data.username=this.user.username;
    }
    else
    {
      if(data.username.length < 3 || data.username.length > 20)
      {
        this.message="The username must be from 3-20 characters long."
      }
      else{
        if(data.password=="")
        {
          data.password=this.user.password;
        }
        else{
          if(data.password.length < 6 || data.password.length > 15)
          {
            this.message="The username must be from 6-15 characters long.";
            
          }
          else{
            if(data.email=="")
            {
              data.email=this.user.password;
            }
            if(data.phone=="")
            {
              data.phone=this.user.phone;
            }
            this.userService.update(this.user.id, data.username,data.password,data.email, data.phone).subscribe(data=>
              {
                this.message="Information Successfully Updated";
              })

          }
        }
       
      }
    }
   
  }
}
