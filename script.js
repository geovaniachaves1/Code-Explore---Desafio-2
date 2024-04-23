function openImg(imgSrc) {
    document.getElementById('boxImg').src = imgSrc;
    document.getElementById('caixaImagemCompleta').style.display = 'flex';
}

// Função para fechar a imagem em tela cheia
function closeImg() {
    document.getElementById('caixaImagemCompleta').style.display = 'none';
}

// Obtendo todas as imagens e adicionando o evento de clique para exibir em tela cheia
var imagens = document.querySelectorAll('.imagem img');
imagens.forEach(function(imagem) {
    imagem.addEventListener('click', function() {
        var imgSrc = this.src;
        openImg(imgSrc);
    });
});

// Adicionando o evento de clique ao botão de fechar a imagem em tela cheia
document.querySelector('#caixaImagemCompleta span').addEventListener('click', function() {
    closeImg();
});
