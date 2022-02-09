import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import User from '../user';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private token: TokenStorageService, private auth: AuthService) { }
 @Output() onSuccess = new EventEmitter();
  message:string="";
   @Input() user: any;
   
  ngOnInit(): void {
    console.log(this.user)
  }
/*
  onUpdate(data:{username: string, password: string, email: string})
  {
    this.message="";
    console.log("input:" + data['username']+ data['email']+data['password'])
    if(!data.username)
    {
      data.username=this.user['username'];
      console.log("input:" + data['username'], data['email'],data['password'])    
    }
   
    if(data.username.length < 3 || data.username.length > 20)
    {
      this.message="The username must be from 3-20 characters long."
      console.log("The username must be from 3-20 characters long.")
    }
    else
    {
      if(!data.password)
      {
        data.password=this.user['password'];
        console.log("input:" + data['username']+ data['email']+data['password'])       
       }
      else{
        if(data.password.length < 6 || data.password.length > 15)
        {
          this.message="The password must be from 6-15 characters long.";
          console.log("The username must be from 3-20 characters long.")
        }
        else
        {
          if(data.email=="" || data.email==undefined)
          {
            data.email=this.user.email;
            console.log("input:" + data['username'], data['email'],data['password'])            
          }
          console.log(data)
          this.auth.update(this.user.id, data.username,data.password,data.email).subscribe((newdata: any)=>
            {
              this.message="Information Successfully Updated";
              console.log(data)
              this.onSuccess.emit(data)
            })

        }
      }
      
    }
    
   
  }
 */
  onUpdate(data:{username: string,  email: string})
  {
    this.message="";
    console.log("input:" + data['username']+ data['email'])
    if(!data.username)
    {
      data.username=this.user['username'];
      console.log("input:" + data['username'], data['email'])    
    }
    if(data.username.length < 3 || data.username.length > 20)
    {
      this.message="The username must be from 3-20 characters long."
      console.log("The username must be from 3-20 characters long.")
    }
    else
    {

        if(data.email=="" || data.email==undefined)
        {
          data.email=this.user.email;
          console.log("input:" + data['username'], data['email'])            }
        console.log(data)
        this.auth.update(this.user.id, data.username,data.email).subscribe((newdata: any)=>
          {
            this.message="Information Successfully Updated";
            this.user.username=data.username;
            this.user.email=data.email;
            this.token.saveUser(this.user)
            console.log(this.user)
            this.token.saveUser(this.user)
            this.onSuccess.emit(this.user)
          })

      }
        
       
      
    }
   
}
