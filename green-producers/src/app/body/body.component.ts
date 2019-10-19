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

categorias: Categoria[];

publicacoes: Publicacao[];

tags: Tag[];

feed:Feed;

  constructor() { 

    this.tags = [
      {
      id:1,
      nome:'Alface'
      },
      {
      id:2,
      nome:'Agrião'
      },
      {
      id:3,
      nome:'Couve'
      },
      {
      id:4,
      nome:'Salsa'
      },
      {
      id:5,
      nome:'Morango'
      },
      {
      id:6,
      nome:'Brócolis'
      },
      {
      id:7,
      nome:'Quiabo'
      },
      {
      id:9,
      nome:'Pepino'
      },
      {
      id:10,
      nome:'Repolho'
      },
      {
      id:11,
      nome:'Pimenta'
      },
      {
      id:12,
      nome:'Jiló'
      },
      {
      id:13,
      nome:'Cebolinha'
      },
      {
      id:14,
      nome:'Pimentão'
      },
      {
      id:15,
      nome:'Almeirão'
      },
        
  ]

    this.publicacoes = [
      {
      categorias:[],
      dataPublicacao:'26/02/2000',
      descricao:'sadosa',
      id:1,
      localizacao:'',
      subtitulo:'saijdwq',
      tags:[],
      titulo:"asdsadqw"
      },
      {
      categorias:[],
      dataPublicacao:'29/07/2009',
      descricao:'sadosa',
      id:2,
      localizacao:'',
      subtitulo:'saijdwq',
      tags:[],
      titulo:"asdsadqw"
      },
      {
      categorias:[],
      dataPublicacao:'07/04/2010',
      descricao:'sadosa',
      id:3,
      localizacao:'',
      subtitulo:'saijdwq',
      tags:[],
      titulo:"asdsadqw"
      },
      {
      categorias:[],
      dataPublicacao:'15/12/2001',
      descricao:'sadosa',
      id:3,
      localizacao:'',
      subtitulo:'saijdwq',
      tags:[],
      titulo:"asdsadqw"
      },
      {
      categorias:[],
      dataPublicacao:'31/06/2011',
      descricao:'sadosa',
      id:4,
      localizacao:'',
      subtitulo:'saijdwq',
      tags:[],
      titulo:"asdsadqw"
      },
      {
      categorias:[],
      dataPublicacao:'20/01/2015',
      descricao:'sadosa',
      id:5,
      localizacao:'',
      subtitulo:'saijdwq',
      tags:[],
      titulo:"asdsadqw"
      },
      {
      categorias:[],
      dataPublicacao:'14/10/2007',
      descricao:'sadosa',
      id:6,
      localizacao:'',
      subtitulo:'saijdwq',
      tags:[],
      titulo:"asdsadqw"
      },
      {
      categorias:[],
      dataPublicacao:'05/08/2008',
      descricao:'sadosa',
      id:7,
      localizacao:'',
      subtitulo:'saijdwq',
      tags:[],
      titulo:"asdsadqw"
      },
    ]

    this.categorias = [
      {
       descricao:"saidijsa",
       id:1,
       nome:"suuhasd"
      },
      {
       descricao:"saidijsa",
       id:2,
       nome:"suuhasd"
      },
      {
       descricao:"saidijsa",
       id:3,
       nome:"suuhasd"
      },
      {
       descricao:"saidijsa",
       id:4,
       nome:"suuhasd"
      },
      {
       descricao:"saidijsa",
       id:5,
       nome:"suuhasd"
      },
      {
       descricao:"saidijsa",
       id:6,
       nome:"suuhasd"
      },
  ]

    this.produtos = [
      { 
        categorias:[],
        dataColheita:'2019/10/01',
        dataVencimento:'12/01/2019',
        descricao:'usdhusd',
        id:1,
        nome:"Planta"
      },
      { 
        categorias:[],
        dataColheita:'2019/10/01',
        dataVencimento:'25/09/2007',
        descricao:'usdhusd',
        id:2,
        nome:"Planta"
      },
      { 
        categorias:[],
        dataColheita:'2019/10/01',
        dataVencimento:'21/08/2008',
        descricao:'usdhusd',
        id:3,
        nome:"Planta"
      },
      { 
        categorias:[],
        dataColheita:'2019/10/01',
        dataVencimento:'26/09/2007',
        descricao:'usdhusd',
        id:4,
        nome:"Planta"
      },
      { 
        categorias:[],
        dataColheita:'2019/10/01',
        dataVencimento:'09/07/2013',
        descricao:'usdhusd',
        id:5,
        nome:"Planta"
      },
      
    ]

    this.users = [
      {
        cpf:1508154251,
        nome:'Weverton',
        id:1,
        password:'abobora123',
        produtos:[],
        username:'verton_tyu'
      },
      {
        cpf:12895456263,
        nome:'Jessica',
        id:2,
        password:'548962',
        produtos:[],
        username:'jessica33'
      },
      {
        cpf:12536569830,
        nome:'Mateus',
        id:3,
        password:'136468',
        produtos:[],
        username:'matheus_hsb'
      },
      {
        cpf:1508154251,
        nome:'Larissa',
        id:4,
        password:'lol1234',
        produtos:[],
        username:'larissa_ti'
      }
    ]

  }

  ngOnInit() {
  }

}
