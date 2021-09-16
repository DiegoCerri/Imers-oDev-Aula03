var alvo = parseInt(getRandomIntInclusive(0, 100));

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Chutar() {
  var tentativa = document.getElementById("valor").value;
  if (tentativa != "") {
    if (tentativa == alvo) {
      document.getElementById("resultado").innerHTML =
        "Parabéns, Você acertou!";
    } else if (tentativa < alvo) {
      document.getElementById("resultado").innerHTML =
        "Errou, tente um número mais alto!";
    } else if (tentativa > alvo) {
      document.getElementById("resultado").innerHTML =
        "Errou, tente um número mais baixo!";
    }
  } else {
    document.getElementById("resultado").innerHTML =
      "Para jogar, é necessário escolher um valor!";
  }
  //document.getElementById("resultado").innerHTML = alvo;*/
}