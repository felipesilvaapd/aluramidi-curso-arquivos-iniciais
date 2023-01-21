function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

     tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (e) {
        tecla.classList.add('ativa');
    }

}

const body = document.querySelector("body")

body.addEventListener("keypress", (e) => {
    if(e.key === "q") {
        tocaSom("#som_tecla_pom")
    } else if (e.key === "w") {
        tocaSom("#som_tecla_clap")
    }
})
