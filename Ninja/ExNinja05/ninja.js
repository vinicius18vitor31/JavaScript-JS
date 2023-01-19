let valores = ['Vinicius', 2, true , null, undefined];


function book (meuBook){
    let meuLivro = {
        'Senhor Dos Aneis': {volumeDePagina: 150, autor: 'S. Viniciu S', editora: 'Vinicius LTDA'}, 
        'Esqueceram De Min': {volumeDePagina:200, autor: 'S. Vinicius S', editora: 'Vinicius LTDA'},
        'Bora Bahea': {volumeDePagina: 285, autor: 'S. Vinicius S', editora: 'Vinicius LTDA'}
    }
    /*
    var livroSelecionado = meuLivro[meuBook]
    if(livroSelecionado){
        return livroSelecionado;
    }
   return 'livro não encontrado'
   */
   return !meuBook ? meuLivro : meuLivro[meuBook];
  
}

let meuBook = 'Bora Bahea';
//"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
console.log(`O livro ${meuBook} foi publicado pela editora ${book(meuBook).editora}`)
