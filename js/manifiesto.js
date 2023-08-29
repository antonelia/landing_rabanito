
$(window).on('load', function(){
    setTimeout(function() {
          $('#loader').fadeOut();
    }, 1000);
});

$("#manifiesto").hide();

const button = document.getElementById('ver-manifiesto');
let moves = 0; // número de movimientos realizados

button.addEventListener('mouseover', function () {
  if (moves < 3) { // si se han realizado menos de 3 movimientos
    //para cambiar la distancia que se desplaza el boton ajustar el valor despues de *
    button.style.left = `${Math.ceil(Math.random() * 50)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    moves++; // aumenta el número de movimientos realizados
  }
});

button.addEventListener('click', function () {
    $("#manifiesto-intro").hide();
    $("#manifiesto").show();
});