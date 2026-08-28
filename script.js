const botoesCurtir = document.querySelectorAll(".btn-curtir");
        
        botoesCurtir.forEach(botao => {
            botao.addEventListener("click", function() {
                let texto = this.querySelector("span");
                let valorAtual = parseInt(texto.textContent);
                texto.textContent = valorAtual + 1;
            });
        });