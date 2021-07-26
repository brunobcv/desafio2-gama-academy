// Variáveis Cadstro de Clientes

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let telefone = document.querySelector("#telefone");
let labelTelefone = document.querySelector("#labelTelefone");
let validTelefone = false;

let endereco = document.querySelector("#endereco");
let labelEndereco = document.querySelector("#labelEndereco");
let validEndereco = false;

let bairro = document.querySelector("#bairro");
let labelBairro = document.querySelector("#labelBairro");
let validBairro = false;

let cep = document.querySelector("#cep");
let labelCep = document.querySelector("#labelCep");
let validCep = false;

let cidade = document.querySelector("#cidade");
let labelCidade = document.querySelector("#labelCidade");
let validCidade = false;

let estado = document.querySelector("#estado");
let labelEstado = document.querySelector("#labelEstado");
let validEstado = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

// Fim Variáveis Cadstro de Clientes
// ----------------------------------------------------------------------------

// Validações de Campos

// Input Nome
nome.addEventListener("keyup", () => {
	if (nome.value.length <= 2) {
		labelNome.setAttribute("style", "color: red");
		labelNome.innerHTML = "Nome *Insira no mínimo 3 caracteres.";
		nome.setAttribute("style", "border-color: red");
		validNome = false;
	} else {
		labelNome.setAttribute("style", "color: green");
		labelNome.innerHTML = "Nome";
		nome.setAttribute("style", "border-color: green");
		validNome = true;
	}
});

// Input E-mail
email.addEventListener("keyup", () => {
	if (email.value.length <= 2 || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
		labelEmail.setAttribute("style", "color: red");
		labelEmail.innerHTML = "E-mail *Insira um e-mail válido.";
		email.setAttribute("style", "border-color: red");
		validEmail = false;
	} else {
		labelEmail.setAttribute("style", "color: green");
		labelEmail.innerHTML = "E-mail";
		email.setAttribute("style", "border-color: green");
		validEmail = true;
	}
});

// Input Telefone
telefone.addEventListener("keyup", () => {
	if (telefone.value.length <= 10) {
		labelTelefone.setAttribute("style", "color: red");
		labelTelefone.innerHTML = "Telefone *Insira um telefone válido.";
		telefone.setAttribute("style", "border-color: red");
		validTelefone = false;
	} else {
		labelTelefone.setAttribute("style", "color: green");
		labelTelefone.innerHTML = "Telefone";
		telefone.setAttribute("style", "border-color: green");
		validTelefone = true;
	}
});

// Input Endereço
endereco.addEventListener("keyup", () => {
	if (endereco.value.length <= 4) {
		labelEndereco.setAttribute("style", "color: red");
		labelEndereco.innerHTML = "Endereço *Insira no mínimo 5 caracteres.";
		endereco.setAttribute("style", "border-color: red");
		validEndereco = false;
	} else {
		labelEndereco.setAttribute("style", "color: green");
		labelEndereco.innerHTML = "Endereço";
		endereco.setAttribute("style", "border-color: green");
		validEndereco = true;
	}
});

// Input Bairro
bairro.addEventListener("keyup", () => {
	if (bairro.value.length <= 4) {
		labelBairro.setAttribute("style", "color: red");
		labelBairro.innerHTML = "Bairro *Insira no mínimo 5 caracteres.";
		bairro.setAttribute("style", "border-color: red");
		validBairro = false;
	} else {
		labelBairro.setAttribute("style", "color: green");
		labelBairro.innerHTML = "Bairro";
		bairro.setAttribute("style", "border-color: green");
		validBairro = true;
	}
});

// Input CEP
cep.addEventListener("keyup", () => {
	if (cep.value.length <= 7) {
		labelCep.setAttribute("style", "color: red");
		labelCep.innerHTML = "CEP *Insira no mínimo 8 caracteres.";
		cep.setAttribute("style", "border-color: red");
		validCep = false;
	} else {
		labelCep.setAttribute("style", "color: green");
		labelCep.innerHTML = "CEP";
		cep.setAttribute("style", "border-color: green");
		validCep = true;
	}
});

// Input Cidade
cidade.addEventListener("keyup", () => {
	if (cidade.value.length <= 2) {
		labelCidade.setAttribute("style", "color: red");
		labelCidade.innerHTML = "Cidade *Insira no mínimo 3 caracteres.";
		cidade.setAttribute("style", "border-color: red");
		validCidade = false;
	} else {
		labelCidade.setAttribute("style", "color: green");
		labelCidade.innerHTML = "Cidade";
		cidade.setAttribute("style", "border-color: green");
		validCidade = true;
	}
});

// Input Estado
estado.addEventListener("keyup", () => {
	if (estado.value.length <= 1) {
		labelEstado.setAttribute("style", "color: red");
		labelEstado.innerHTML = "Estado *Insira no mínimo 2 caracteres.";
		estado.setAttribute("style", "border-color: red");
		validEstado = false;
	} else {
		labelEstado.setAttribute("style", "color: green");
		labelEstado.innerHTML = "Estado";
		estado.setAttribute("style", "border-color: green");
		validEstado = true;
	}
});

// Fim Validações de Campos
// ----------------------------------------------------------------------------

// Cadastrar Cliente

function cadastrarCliente() {
	if (validNome && validEmail && validTelefone && validEndereco && validBairro && validCep && validCidade && validEstado) {
		let listaClientes = JSON.parse(localStorage.getItem("listaClientes") || "[]");

		listaClientes.push({
			nomeCad: nome.value,
			emailCad: email.value,
      telefoneCad: telefone.value,
      enderecoCad: endereco.value,
      bairroCad: bairro.value,
      cepCad: cep.value,
      cidadeCad: cidade.value,
      estadoCad: estado.value
		});

		localStorage.setItem("listaClientes", JSON.stringify(listaClientes));

		msgSuccess.setAttribute("style", "display: block");
		msgSuccess.innerHTML = "<strong>Cadastrando cliente...</strong>";
    setTimeout(() => {
			msgSuccess.innerHTML = "<strong>Cliente cadastrado!</strong>";
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

// Fim Cadastrar Cliente
// ----------------------------------------------------------------------------