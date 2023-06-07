alert("Bem vindo ao programa de cadastro de usuário! Pressione OK para continuar...");

var user = {
    firstName: "",
    lastName: ""
}

user.firstName = prompt("Digite seu primeiro nome:");
user.lastName = prompt("Digite seu sobrenome:");

alert("Cadastro realizado com sucesso. Usuário " + user.firstName + " " + user.lastName + " inserido na base de dados.");

