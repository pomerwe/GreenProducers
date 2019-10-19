export class User{
    id:number;
    nome:string;
    cpf:number;
    username:string;
    password:string;
    produtos:Produto[];
}

export class Produto{
    id:number;
    nome:string;
    dataColheita:Date;
    categorias:Categoria[];
    dataVencimento:Date;
    descricao:string;
}

export class Categoria{
    id:number;
    nome:string;
    descricao:string;
}

export class Publicacao{
    id:number;
    titulo:string;
    subtitulo:string;
    dataPublicacao:Date;
    categorias:Categoria[];
    tags:Tag[];
    localizacao:Date;
    descricao:string;
}

export class Tag{
    id:number;
    nome:string;
}

export class Feed{
    publicacoes:Publicacao[];
}
