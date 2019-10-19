import { Component, OnInit } from '@angular/core';
import { User, Feed, Produto, Categoria, Publicacao, Tag } from 'src/models/user';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

users: User[];

produtos: Produto[];

categoria: Categoria[];

publicacao: Publicacao[];

tags: Tag[];

feed:Feed;

  constructor() { 

    this.users = [
      {
        cpf:1508154251,
        nome:'asdisadw',
        id:1,
        password:'136468',
        produtos:[],
        username:'asiasihd'
      },
      {
        cpf:1508154251,
        nome:'asdisadw',
        id:1,
        password:'136468',
        produtos:[],
        username:'asiasihd'
      },
      {
        cpf:1508154251,
        nome:'asdisadw',
        id:1,
        password:'136468',
        produtos:[],
        username:'asiasihd'
      },
      {
        cpf:1508154251,
        nome:'asdisadw',
        id:1,
        password:'136468',
        produtos:[],
        username:'asiasihd'
      }
    ]

  }

  ngOnInit() {
  }

}
