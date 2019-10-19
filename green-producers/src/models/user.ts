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
    dataColheita:string;
    categorias:Categoria[];
    dataVencimento:string;
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
    dataPublicacao:string;
    categorias:Categoria[];
    tags:Tag[];
    localizacao:string;
    descricao:string;
}

export class Tag{
    id:number;
    nome:string;
}

export class Feed{
    publicacoes:Publicacao[];
}
