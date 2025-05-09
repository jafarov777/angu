import { Component,Injectable } from '@angular/core';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  constructor(private userService:UserService) { }
  userCreate(name: string) {
    this.userService.addUser(name);
  }
}
