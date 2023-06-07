alert("Bem vindo ao programa de cadastro de aluno(a)! Pressione OK para continuar...");

var aluno = {
    nome: "",
    idade: 0
}

aluno.nome = prompt("Digite o nome do(a) aluno(a):");
aluno.idade = prompt("Digite a idade do(a) aluno(a):");

alert("Cadastro realizado com sucesso! Aluno(a) cadastrado(a): " + aluno.nome + ", idade: " + aluno.idade + ".");
