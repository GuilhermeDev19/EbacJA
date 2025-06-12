const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 10;
let tentativas = 0;
let jogoEncerrado = false;

function chutar() {
  if (jogoEncerrado) return;

  const palpite = parseInt(document.getElementById('palpite').value);
  const mensagem = document.getElementById('mensagem');
  const tentativasRestantes = document.getElementById('tentativasRestantes');

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "Por favor, insira um número entre 1 e 100.";
    return;
  }

  tentativas++;

  if (palpite === numeroSecreto) {
    mensagem.textContent = "🎉 Você acertou! Parabéns!";
    jogoEncerrado = true;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "O número secreto é maior.";
  } else {
    mensagem.textContent = "O número secreto é menor.";
  }

  const tentativasRestam = maxTentativas - tentativas;
  tentativasRestantes.textContent = "Tentativas restantes: " + tentativasRestam;

  if (tentativasRestam === 0 && palpite !== numeroSecreto) {
    mensagem.textContent = "❌ Você perdeu! O número secreto era " + numeroSecreto + ".";
    jogoEncerrado = true;
  }
}