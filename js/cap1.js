document.addEventListener('DOMContentLoaded', function () {

    //////btn sonido ambiente
    var music = document.getElementById("music");
    var playMusicBtn = document.getElementById("playMusicBtn");
    var musicSlider = document.getElementById("musicSlider");
    
    music.play();  // Reproducir música al cargar la página
    
    playMusicBtn.addEventListener('click', function () {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    });
    
    music.volume = 0.1;
    
    musicSlider.addEventListener('input', function () {
        music.volume = musicSlider.value;
    });



    /////btn sonido audios /////
    
    // var escena1Narracion = document.getElementById('escena1Narracion');
    var playVoicesBtn = document.getElementById('playVoicesBtn');
    var voicesSlider = document.getElementById('voicesSlider');
    
    playVoicesBtn.addEventListener('click', function () {
        // escena1Narracion.muted = !escena1Narracion.muted;
        audioEscena1.muted = !audioEscena1.muted;
        audioEscena2.muted = !audioEscena2.muted;
    });
    
    
    voicesSlider.addEventListener('input', function () {
        // escena1Narracion.volume = voicesSlider.value;
        audioEscena1.volume = voicesSlider.value;
        audioEscena2.volume = voicesSlider.value;
    });
});





//////escena 1 //////

//hover contorno seleccion//

var divContornoEscena1 = document.getElementById('div-contorno-escena1')
var contornoEscena1 = document.querySelector('.contorno-escena1')

divContornoEscena1.addEventListener('mouseover', borde_escena1)

function borde_escena1(){
    contornoEscena1.classList.remove('d-none')
    divContornoEscena1.addEventListener('mouseout', borde_escena1_Oculto)

    function borde_escena1_Oculto(){
        contornoEscena1.classList.add('d-none')
    }
}


//Esto es para activar el gif, y el audio, esconder el contorno verde y la primera flecha, apenas acaba el video, 
//lo esconde, agrega una imagen, la imagen del ultimo frame del gif y muestra la segunda flecha.

var escena1gif = document.getElementById('escena1gif')
var arrow1Escena1 = document.getElementById('arrow1Escena1')
var imgEscena1gif = document.getElementById('imgEscena1gif')
var arrow2Escena1 = document.getElementById('arrow2Escena1')
var audioEscena1 = document.getElementById('audioEscena1')


divContornoEscena1.addEventListener('click', activeEscena1)

function activeEscena1 (){
    escena1gif.classList.remove('d-none')
    divContornoEscena1.classList.add('d-none')
    arrow1Escena1.classList.add('d-none')
    audioEscena1.play()

    setTimeout(function() {
        escena1gif.classList.add('d-none');
        imgEscena1gif.classList.remove('d-none')
        arrow2Escena1.classList.remove('d-none')
    }, 8000);

    //esto de acá que esta comentado abajo es para que al darle click se active de forma correcta la animación
    //por ahora no lo voy a utilizar pero me sirve de plantilla
    // escena1Narracion.classList.remove('d-none');
    // escena1Narracion.play();
}








//////escena 2 //////

//hover contorno seleccion//

var divContornoEscena2 = document.getElementById('divContornoEscena2')
var contornoEscena2 = document.getElementById('contornoEscena2')

divContornoEscena2.addEventListener('mouseover', borde_escena2)

function borde_escena2(){
    contornoEscena2.classList.remove('d-none')
    divContornoEscena2.addEventListener('mouseout', borde_escena2_Oculto)

    function borde_escena2_Oculto(){
        contornoEscena2.classList.add('d-none')
    }
}

//Esto es para activar el gif, y el audio, esconder el contorno verde y la primera flecha, apenas acaba el video, 
//lo esconde, agrega una imagen, la imagen del ultimo frame del gif y muestra la segunda flecha.

var familiaEscena2 = document.getElementById('familiaEscena2')
var imgFamiliaEscena2 = document.getElementById('imgFamiliaEscena2')
var narracionEscena2 = document.getElementById('narracionEscena2')
var imgNarracionEscena2 = document.getElementById('imgNarracionEscena2')
var arrow1Escena2 = document.getElementById('arrow1Escena2')
var arrow2Escena2 = document.getElementById('arrow2Escena2')
var audioEscena2 = document.getElementById('audioEscena2')
var escena2Gomez = document.getElementById('escena2Gomez')


divContornoEscena2.addEventListener('click', activeEscena2)

function activeEscena2 (){
    familiaEscena2.classList.remove('d-none')
    narracionEscena2.classList.remove('d-none')
    divContornoEscena2.classList.add('d-none')
    arrow1Escena2.classList.add('d-none')
    audioEscena2.play()

    setTimeout(function() {
        escena2Gomez.classList.remove('d-none')
    }, 8000);

    setTimeout(function() {
        narracionEscena2.classList.add('d-none');
        imgNarracionEscena2.classList.remove('d-none')
    }, 22000);

    setTimeout(function() {
        familiaEscena2.classList.add('d-none');
        imgFamiliaEscena2.classList.remove('d-none')
        arrow2Escena2.classList.remove('d-none')
    }, 27000);

}