import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers: [UserService]
})
export class ReposComponent implements OnInit {
  repos: any;
  userName: string = this.route.snapshot.params.name;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.userService.getUserRepos(this.userName).subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    })
  }
}
