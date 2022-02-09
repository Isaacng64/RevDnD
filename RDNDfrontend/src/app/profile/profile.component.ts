import { Component, OnInit } from '@angular/core';
import User from '../user';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  update = false;
  constructor(private token: TokenStorageService, private auth: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser)
  }
  onClick(user: User)
  {
    this.update = true
    
  }
  onBack()
  {
    this.update=false
  }
  updateSucc(event: any)
  {
    console.log(event)
    this.update=false
    this.currentUser = this.token.getUser();
    window.location.reload();

  }
}