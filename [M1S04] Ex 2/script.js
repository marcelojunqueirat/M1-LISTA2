alert("Bem vindo ao programa de cálculo de Índice de Massa Corporal (IMC)! Pressione OK para continuar...");

var weight = prompt("Digite o seu peso:");
var height = prompt("Digite a sua altura:");

weight = weight.replace(",", ".");
height = height.replace(",", ".");

var resultIMC = Number(weight) / Number(height * height);

alert("O seu Índice de Massa Corporal (IMC) é: " + resultIMC.toFixed(2) + "!");
