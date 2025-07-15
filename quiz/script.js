// Recupera a pontuação salva ou inicia em 0
let pontuacao = localStorage.getItem("pontuacao") ? parseInt(localStorage.getItem("pontuacao")) : 0;

// Atualiza a pontuação na tela
document.getElementById("pontuacao").innerText = "Pontuação: " + pontuacao;

function verificarResposta(botao, proximaPagina) {
    if (botao.getAttribute("value") === "true") {
        botao.classList.add("correta");
        pontuacao++;
        localStorage.setItem("pontuacao", pontuacao); // Salva a pontuação
    } else {
        botao.classList.add("errada");
    }
}