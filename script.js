function openImg(imgSrc) {
    document.getElementById('boxImg').src = imgSrc;
    document.getElementById('caixaImagemCompleta').style.display = 'flex';
}

function closeImg() {
    document.getElementById('caixaImagemCompleta').style.display = 'none';
}

var imagens = document.querySelectorAll('.imagem img');
imagens.forEach(function(imagem) {
    imagem.addEventListener('click', function() {
        var imgSrc = this.src;
        openImg(imgSrc);
    });
});

document.querySelector('#caixaImagemCompleta span').addEventListener('click', function() {
    closeImg();
});
