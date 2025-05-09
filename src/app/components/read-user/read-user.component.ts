import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrl: './read-user.component.scss'
})
export class ReadUserComponent {
constructor(private userService:UserService)
{

}
}
