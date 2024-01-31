class Livro{
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade = true
constructor(titulo,autor,editora,anopublicacao){
this.Titulo = titulo
this.Autor = autor
this.Editora = editora
this.AnoPublicacao = anopublicacao
}
}

let livros = []
livros.push(new Livro("livro1","autor1","editora1",2000))
livros.push(new Livro("livro2","autor2","editora2",2001))
livros.push(new Livro("livro3","autor3","editora3",2002))
livros.push(new Livro("livro4","autor4","editora4",2003))

class Biblioteca{
    Nome 
    Endereco
    Telefone
    AcervoLivros = []
     constructor(nome,endereco,telefone,acervolivros){
     this.Nome = nome
     this.Endereco = endereco
     this.Telefone = telefone
     this.AcervoLivros = acervolivros

}
   BuscarLivroPeloTitulo(titulo){
    this.AcervoLivros.forEach(livro => {
        if(livro.Titulo == titulo){
            console.log(livro)
        }
     })
   } 
    EmprestarLivro(titulo){
    let emprestado = false
    this.AcervoLivros.forEach(livro =>{
        if(livro.Titulo == titulo){
            if(livro.Disponibilidade == true){
                livro.Disponibilidade = false
                emprestado = true
                console.log("livro emprestado")
            }
        }
    })
    if(emprestado){
        return true
    }else {
        return false
    }
}
    DevolverLivro(titulo){
    livros.forEach(livro=> {
        if(livro.Titulo == titulo){
            livro.Disponibilidade = true    
            console.log("livro devolvido")
        }
    })
}

}


let biblioteca = new Biblioteca("biblioteca do quebas", "rua logo ali", "70707070",livros)

biblioteca.BuscarLivroPeloTitulo("livro1")
biblioteca.EmprestarLivro("livro2")
biblioteca.DevolverLivro("livro2")