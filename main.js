function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

   //!=(diferente), &&(e ou and)
   if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
     }
    else{
         alert('Elemento não encontrado ou seletor inválido')    
    }

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

    tecla.onkeydown = function (evento) {
        
        console.log(evento)


        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}








// const body = document.querySelector("body")

// body.addEventListener("keypress", (e) => {
//     if(e.key === "q") {
//         tocaSom("#som_tecla_pom")
//     } else if (e.key === "w") {
//         tocaSom("#som_tecla_clap")
//     }
// })
