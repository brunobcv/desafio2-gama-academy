// Variáveis Cadastro de Produtos

let produto = document.querySelector("#produto");
let labelProduto = document.querySelector("#labelProduto");
let validProduto = false;

let categoria = document.querySelector("#categoria");
let labelCategoria = document.querySelector("#labelCategoria");
let validCategoria = false;

let preco = document.querySelector("#preco");
let labelPreco = document.querySelector("#labelPreco");
let validPreco = false;

let quantidade = document.querySelector("#quantidade");
let labelQuantidade = document.querySelector("#labelQuantidade");
let validQuantidade = false;

let descricao = document.querySelector("#descricao");
let labelDescricao = document.querySelector("#labelDescricao");
let validDescricao = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

// Fim Variáveis Cadstro de Produtos
// ----------------------------------------------------------------------------

// Validações de Campos Produto

// Input Produto
produto.addEventListener("keyup", () => {
	if (produto.value.length <= 2) {
		labelProduto.setAttribute("style", "color: red");
		labelProduto.innerHTML = "Produto *Insira no mínimo 3 caracteres.";
		produto.setAttribute("style", "border-color: red");
		validProduto = false;
	} else {
		labelProduto.setAttribute("style", "color: green");
		labelProduto.innerHTML = "Produto";
		produto.setAttribute("style", "border-color: green");
		validProduto = true;
	}
});

// Input Categoria
categoria.addEventListener("keyup", () => {
	if (categoria.value.length <= 2 ) {
		labelCategoria.setAttribute("style", "color: red");
		labelCategoria.innerHTML = "Categoria *Insira no mínimo 3 caracteres.";
		categoria.setAttribute("style", "border-color: red");
		validCategoria = false;
	} else {
		labelCategoria.setAttribute("style", "color: green");
		labelCategoria.innerHTML = "Categoria";
		categoria.setAttribute("style", "border-color: green");
		validCategoria = true;
	}
});

// Input Preço
preco.addEventListener("keyup", () => {
	if (preco.value <= 0) {
		labelPreco.setAttribute("style", "color: red");
		labelPreco.innerHTML = "Preço *Insira um valor maior que 0.";
		preco.setAttribute("style", "border-color: red");
		validPreco = false;
	} else {
		labelPreco.setAttribute("style", "color: green");
		labelPreco.innerHTML = "Preço";
		preco.setAttribute("style", "border-color: green");
		validPreco = true;
	}
});

// Input Quantidade
quantidade.addEventListener("keyup", () => {
	if (quantidade.value <= 0) {
		labelQuantidade.setAttribute("style", "color: red");
		labelQuantidade.innerHTML = "Quantidade *Insira uma quantidade maior que 0.";
		quantidade.setAttribute("style", "border-color: red");
		validQuantidade = false;
	} else {
		labelQuantidade.setAttribute("style", "color: green");
		labelQuantidade.innerHTML = "Quantidade";
		quantidade.setAttribute("style", "border-color: green");
		validQuantidade = true;
	}
});

// Input Descrição
descricao.addEventListener("keyup", () => {
	if (descricao.value.length <= 4) {
		labelDescricao.setAttribute("style", "color: red");
		labelDescricao.innerHTML = "Descrição *Insira no mínimo 5 caracteres.";
		descricao.setAttribute("style", "border-color: red");
		validDescricao = false;
	} else {
		labelDescricao.setAttribute("style", "color: green");
		labelDescricao.innerHTML = "Descrição";
		descricao.setAttribute("style", "border-color: green");
		validDescricao = true;
	}
});

// Fim Validações de Campos Produto
// ----------------------------------------------------------------------------

// Cadastrar Produto

function cadastrarProduto() {
	if (validProduto && validCategoria && validPreco && validQuantidade && validDescricao) {
		let listaProdutos= JSON.parse(localStorage.getItem("listaProdutos") || "[]");

		listaProdutos.push({
			produtoCad: produto.value,
			categoriaCad: categoria.value,
      precoCad: preco.value,
      quantidadeCad: quantidade.value,
      descricaoCad: descricao.value
		});

		localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));

		msgSuccess.setAttribute("style", "display: block");
		msgSuccess.innerHTML = "<strong>Cadastrando produto...</strong>";
    setTimeout(() => {
			msgSuccess.innerHTML = "<strong>Produto cadastrado!</strong>";
		}, 2000);
		msgError.setAttribute("style", "display: none");
		msgError.innerHTML = "";
	} else {
		msgError.setAttribute("style", "display: block");
		msgError.innerHTML =
			"<strong>Preencha todos os campos corretamente antes de clicar em Cadastrar.</strong>";
		msgSuccess.setAttribute("style", "display: none");
		msgSuccess.innerHTML = "";
	}
}

// Fim Cadastrar Produto
// ----------------------------------------------------------------------------
