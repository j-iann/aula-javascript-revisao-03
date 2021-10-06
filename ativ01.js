//#1
var fruta = "kiwi";

switch (fruta) {
    case "maçã":
        console.log("Não vendemos esta fruta aqui");
        break;
    case "kiwi":
        console.log("Estamos com escassez de kiwis");
        break;
    case "melancia":
        console.log("Aqui está, são 3 reais o quilo");
        break;
    default:
        console.log("Procure o administrador do sistema!");
}

//#2
var salario = 750.00;
var aumento;

if (salario < 280.00) {
    aumento = 0.20;
}
else if (salario >= 280.00 && salario < 700.00) {
    aumento = 0.15;
}
else if (salario >= 700.00 && salario < 1500.00) {
    aumento = 0.10;
}
else if (salario >= 1500.00) {
    aumento = 0.05;
}

var valor_aumento = (salario * aumento);
var novo_salario = salario + valor_aumento;

console.log("Salário antes do reajuste: " + salario);
console.log("Percentual do aumento: " + aumento);
console.log("Valor do aumento: " + valor_aumento);
console.log("Novo salário: " + novo_salario);