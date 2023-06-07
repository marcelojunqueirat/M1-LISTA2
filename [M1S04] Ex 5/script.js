alert("Bem vindo ao programa de média ponderada! Pressione OK para continuar...");

var gradeOne = prompt("Digite a primeira nota:");
var weightGradeOne = prompt("Digite o peso da primeira nota:");

var gradeTwo = prompt("Digite a segunda nota:");
var weightGradeTwo = prompt("Digite o peso da segunda nota:");

var gradeThree = prompt("Digite a terceira nota:");
var weightGradeThree = prompt("Digite o peso da terceira nota:");

gradeOne = Number(gradeOne.replace(",", "."));
weightGradeOne = Number(weightGradeOne.replace(",", "."));

gradeTwo = Number(gradeTwo.replace(",", "."));
weightGradeTwo = Number(weightGradeTwo.replace(",", "."));

gradeThree = Number(gradeThree.replace(",", "."));
weightGradeThree = Number(weightGradeThree.replace(",", "."));

var resultGradeOne = gradeOne * weightGradeOne;
var resultGradeTwo = gradeTwo * weightGradeTwo;
var resultGradeThree = gradeThree * weightGradeThree;

var resultWeight = weightGradeOne + weightGradeTwo + weightGradeThree;

var weightedAverage = (resultGradeOne + resultGradeTwo + resultGradeThree) / resultWeight;

alert("A média ponderada das notas é: " + weightedAverage.toFixed(2) + ".");


