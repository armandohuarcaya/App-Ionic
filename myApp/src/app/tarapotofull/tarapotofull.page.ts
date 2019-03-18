import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../providers/upeu/user.service';

@Component({
  selector: 'app-tarapotofull',
  templateUrl: './tarapotofull.page.html',
  styleUrls: ['./tarapotofull.page.scss'],
  providers: [UserService

  ],
})
export class TarapotofullPage implements OnInit {
  users: any;
  public objeto_feed = {
    titulo: 'Charly Charly',
    data: 'noviembre 95',
    descripcion: 'crando niels',
    likes: 12,
    coments: 4,
    tiempo: 'agosto',
  };
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private userService: UserService) {
    this.getUsers ();
   }

  ngOnInit() {
  }
  public atras() {
    this.router.navigate(['../tarapoto']);
  }
  getUsers() {
    this.userService.getUsers()
    .then(data => {
    this.users = data;
    console.log(this.users);
    });
    }
}
