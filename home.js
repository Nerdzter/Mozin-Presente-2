// Espera que o DOM (árvore de elementos HTML) seja totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o elemento do link
    const linkElement = document.querySelector("a");

    // Adiciona um ouvinte de evento de clique ao link
    linkElement.addEventListener("click", function (event) {
        // Impede o comportamento padrão do link (navegação para outra página)
        event.preventDefault();

        // Aqui você pode adicionar a lógica desejada, por exemplo, exibir uma mensagem
        alert("Você clicou no link para resgatar seu presente!");

        // Ou redirecionar o usuário para a página de presente
        window.location.href = "file:///C:/Users/pc/Desktop/Site%20bela/presente.html";
    });
});
