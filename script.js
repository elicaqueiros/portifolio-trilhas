
document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(
    ".btn, .social-link, .project-link"
  );

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      botao.classList.add("clicado");

      setTimeout(() => {
        botao.classList.remove("clicado");
      }, 350);
    });
  });
});
