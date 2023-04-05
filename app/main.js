let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getLivrosDaAPI ();
const elementoParaInserirLivros = document.getElementById('livros')

async function getLivrosDaAPI () {
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    
    let livrosDesconto = aplicarDesconto(livros);

    exibirOsLivrosNaTela(livrosDesconto);
}