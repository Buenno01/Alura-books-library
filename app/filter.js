const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    if (this.classList.value == 'btn btn-disponiveis'){
        let disponiveis = livros.filter(livro => livro.quantidade > 0)
        exibirOsLivrosNaTela(disponiveis)
    } else {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}}