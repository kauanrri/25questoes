const data = new Date(2024, 1, 25); // Mês é baseado em zero (1 = fevereiro)
const dataFormatada = data.toLocaleDateString("pt-BR");
console.log(dataFormatada);

//O objeto Date é inicializado com o ano, mês (zero-indexado), e dia.
//toLocaleDateString("pt-BR") formata a data no estilo brasileiro (DD/MM/AAAA).