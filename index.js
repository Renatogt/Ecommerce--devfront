const numero1 = document.querySelector("#number1");
const numero2 = document.querySelector("#number2");
const numero3 = document.querySelector("#number3");
const numero4 = document.querySelector("#number4");


function executarSoma() {
      excultaOperacao(numero1, numero2, "#resultado", "soma");
}

function executarSub() {
      excultaOperacao(numero3, numero4, "#resultadosub", "sub");
}


function excutaOperacao(num1, num2, idResultado, tipoOperacao) {
      let resultado;
      num1 = parseInt(num1.value);
      num2 = parseInt(num2.value);
      if (tipoOperacao === "Soma") {
            resultado = num1 + num2;
      }
      if (tipoOperacao === "Sub") {
            resultado = num1 - num2;
      }
      document.querySelector(idResultado).innerText = resultado;
}

function habilitaSomarBtn() {
      const botao = document.querySelector("#botao-somar");
      botao.disabled = false;
}

function desabilitaSomarBtn() {
      const botao = document.querySelector("#botao-somar");
      botao.disabled = false;
}

function habilitaSubBtn() {
      const botao = document.querySelector("#botao-sub");
      botao.disabled = false;
}

function desabilitaSubBtn() {
      const botao = document.querySelector("#botao-sub");
      botao.disabled = false;
}




function decideEstadoBotao("#botao-somar", "botao-sub") {
      if (numero1.value !== "" && numero2.value !== "") {
            habilitaSomarBtn();
      } else {
            desabilitaSomarBtn();
      }
}


function mudaEstadoBotao(isDisabled, idBotao) {
      const botao = document.querySelector(idBotao);
      botao.disabled = isDisabled;
}

function zerarResultado() {
      document.querySelector("#resultado-soma").innerText = "";
}


function zerarResultado() {
      document.querySelector("#resultado-sub").innerText = "";
}

zerarResultado()

document.querySelector("#botao-somar").onclick = executarSoma;
document.querySelector("#botao-sub").onclick = executarSub;

numero1.onkeyup = decideEstadoBotao;
numero2.onkeyup = decideEstadoBotao;

numero1.onfocus = zerarResultado;
numero2.onfocus = zerarResultado;