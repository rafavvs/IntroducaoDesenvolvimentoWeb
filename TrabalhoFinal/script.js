// Função para alternar entre o tema claro e escuro
function alternarTema() {
    const corpo = document.body;
    corpo.classList.toggle("tema-escuro");
    const isEscuro = corpo.classList.contains("tema-escuro");
    localStorage.setItem("tema", isEscuro ? "escuro" : "claro");
    document.getElementById("btn-tema").innerHTML = isEscuro ? "☀️ Modo Claro" : "🌙 Modo Escuro";
}

window.onload = () => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        document.body.classList.add("tema-escuro");
        document.getElementById("btn-tema").innerHTML = "☀️ Modo Claro";
    }
};

// Funções para abrir e fechar o modal de slides
function abrirModal(urlSlide) {
    const modal = document.getElementById("modalSlides");
    const iframe = document.getElementById("iframeSlides");
    iframe.src = urlSlide;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    const modal = document.getElementById("modalSlides");
    const iframe = document.getElementById("iframeSlides");
    modal.style.display = "none";
    iframe.src = "";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById("modalSlides");
    if (event.target == modal) {
        fecharModal();
    }
}