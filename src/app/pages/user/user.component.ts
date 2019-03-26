import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: IUser;
  displayedColumns: string[] = ['Login', 'Id', 'Repos', 'Type'];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params.name;

    this.userService.getUserData(name).subscribe(user =>{
      this.user = user;  
  });
  }

}
