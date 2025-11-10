  window.addEventListener("load", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"  // rolagem suave
  });
});

let tempo = 60; // valor inicial

  const contador = setInterval(() => {
    tempo--;
    document.getElementById("regressivo").textContent = tempo;

    if (tempo <= 0) {
      clearInterval(contador);
      document.getElementById("regressivo").textContent = "0";
      document.getElementById("minhaSection").style.display = "block";
      document.getElementById("minhaLocalizacao").style.display = "block";
      document.getElementById("contagemRegressiva").style.display = "none";
    }
  }, 1000); // atualiza a cada 1 segundo


