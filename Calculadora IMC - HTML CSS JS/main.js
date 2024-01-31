"use strict";

function getIMC(altura_valor, peso_valor) {
  let imc = parseFloat((peso_valor / (altura_valor * altura_valor)).toFixed(1));
  return imc;
}

function atribuirIMC(imc, nome_valor) {
  if (imc > 0 && imc < 18.5) {
    return `${nome_valor} tem um IMC de : ${imc} o que significa que está com Baixo Peso.`;
  } else if (imc >= 18.5 && imc < 25) {
    return `${nome_valor} tem um IMC de : ${imc} o que significa que está com Peso "Normal".`;
  } else if (imc >= 25 && imc < 30) {
    return `${nome_valor} tem um IMC de : ${imc} o que significa que está com Excesso de Peso.`;
  } else if (imc >= 30 && imc < 35) {
    return `${nome_valor} tem um IMC de : ${imc} o que significa que está com Obesidade de Grau I.`;
  } else if (imc >= 35 && imc < 40) {
    return `${nome_valor} tem um IMC de : ${imc} o que significa que está com Obesidade de Grau II.`;
  } else if (imc >= 40) {
    return `${nome_valor} tem um IMC de : ${imc} o que significa que está com Obesidade Mórbida.`;
  } else {
    return "Inseriu Valores Inválidos !!";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const butaocalc = document.querySelector('.calc');

  butaocalc.addEventListener('click', function () {
    let nome = document.getElementById('nome');
    let nome_valor = nome.value;
    let altura = document.getElementById('altura');
    let altura_valor = parseFloat(altura.value/100);
    let peso = document.getElementById('peso');
    let peso_valor = parseFloat(peso.value);

    if (nome_valor === '') {
      alert('Por favor, insira o nome antes de calcular o IMC.');
      return;
    }
    
    let imc = getIMC(altura_valor, peso_valor);
    let texto_resultado = atribuirIMC(imc, nome_valor);

    document.querySelector('.Resultado .res-container').innerHTML = texto_resultado;
  });
  let nome = document.getElementById('nome');
  nome.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-ZáéíóúâêîôûãõàèìòùäëïöüÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÄËÏÖÜçÇ]/g, '');
    // Apenas letras e acentos são permitidos no campo nome
  });
});
