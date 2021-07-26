let btnClientes = document.querySelector('#cad-clientes');
let btnProdutos = document.querySelector('#cad-produtos');

// Redirecionar Páginas ao clicar no Botão

function abrirCadClientes() {
  btnClientes.addEventListener('click', () => {
    window.location.href = "./cadastrar-clientes.html";
  })
}

function abrirCadProdutos() {
  btnProdutos.addEventListener('click', () => {
    window.location.href = "./cadastrar-produtos.html";
  })
}

// Fim Redirecionar Páginas ao clicar no Botão
// ----------------------------------------------------------------------------