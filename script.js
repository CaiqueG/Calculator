function adicionarValores() {
  var valor1 = document.querySelector("#valor1");                    // Seleciona o campo em que foi digitado 
  var valor11 = parseInt(valor1.value);                              // Seleciona o que foi digitado no campo 
  var valor2 = document.querySelector("#valor2");
  var valor22 = parseInt(valor2.value);
  console.log(valor11, valor22);
  var operacao = document.querySelector("#operacao");
  const operacao1 = operacao.value;
  console.log(valor11, valor22, operacao1);
  switch (operacao1) {                                               // o Switch é uma especie de if
    case "+":                                                        // Soma o  valor
      var resultado = valor11 + valor22;
      valor1.value = "";
      valor2.value = "";
      operacao.value = "";
      var resultado1 = valor11 + " + " + valor22 + " = " + resultado;
      break;

    case "-":                                                       // Subtrai o  valor
      var resultado = valor11 - valor22;
      valor1.value = "";
      valor2.value = "";
      operacao.value = "";
      var resultado1 = valor11 + " - " + valor22 + " = " + resultado;
      break;

    case "*":                                                       // Multiplica o  valor
      var resultado = valor11 * valor22;
      valor1.value = "";
      valor2.value = "";
      operacao.value = "";
      var resultado1 = valor11 + " * " + valor22 + " = " + resultado;
      break;

    case "/":                                                       // Divide o  valor
      var resultado = valor11 / valor22;
      valor1.value = "";
      valor2.value = "";
      operacao.value = "";
      var resultado1 = valor11 + " / " + valor22 + " = " + resultado;
      break;
  }
  var resultadoFinal = document.getElementById("valorFinal");     // Escolhe a div em que o valor vai ser mostrado
  resultadoFinal.innerHTML = resultado1;                         // Exibe o valor na tela
  console.log(resultadoFinal);
}
