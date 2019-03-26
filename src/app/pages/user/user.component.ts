import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: IUser;
  repos:any;
  displayedColumns: string[] = ['Login', 'Id', 'Repos', 'Type'];
  name: any = this.route.snapshot.params.name;
  
  constructor(private userService: UserService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void  {
    this.userService.getUserData(this.name).subscribe(user =>{
      this.user = user;  
  });
}
showRepos():void{
  console.log(this.name);

  this.userService.getUserRepos(this.name).subscribe(repos => 
    this.repos = repos)
  }

}
