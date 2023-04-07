const botoes = document.querySelectorAll('.btn');
const elementoComValorTotal = document.getElementById('valor_total_livros_disponiveis');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    if (this.classList.value == 'btn btn-disponiveis'){
        let disponiveis = livros.filter(livro => livro.quantidade > 0)
        exibirOsLivrosNaTela(disponiveis);
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirValorTotal(valorTotal);
    } else {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}}

function exibirValorTotal(valorTotal) {
    elementoComValorTotal.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}