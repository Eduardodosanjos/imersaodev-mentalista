var numeroSecreto = parseInt(Math.random() * 10);
var tentativas = 3;

while (tentativas)
  {
    var chute = parseInt(prompt("Digite um número entre 0 e 10"));

    if(numeroSecreto == chute){
      document.write("<h2>Acertou</h2>");
      break;
    }
    else if(chute > numeroSecreto){
      alert("O número secreto é menor");
      tentativas--;
    }
    else if(chute < numeroSecreto){
      alert("O número secreto é maior");
      tentativas--;
    }
}

if (chute != numeroSecreto) {
  document.write("<h2>Suas tentativas acabaram. O número secreto era " + numeroSecreto + "</h2>");
}
