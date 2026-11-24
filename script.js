const botoes = document.querySelectorAll(".nav-link");
const paginas = document.querySelectorAll(".pagina");
const botoesIr = document.querySelectorAll("[data-go]");

function abrirPagina(nome) {
    // Esconde todas as páginas
    paginas.forEach((pagina) => {
        pagina.classList.remove("ativa");
    });

    // Mostra a página escolhida
    document.getElementById(nome).classList.add("ativa");

    // Atualiza o botão selecionado no menu
    botoes.forEach((botao) => {
        botao.classList.toggle("active", botao.dataset.page === nome);
    });

    window.scrollTo(0, 0);
}

// Navegação pelo menu
botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        abrirPagina(botao.dataset.page);
    });
});

// Botão "Ver meus projetos"
botoesIr.forEach((botao) => {
    botao.addEventListener("click", () => {
        abrirPagina(botao.dataset.go);
    });
});
