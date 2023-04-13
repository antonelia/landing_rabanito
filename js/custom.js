//Esta primer funcion bloquea el scroll del sitio apenas carga para esperar que el usuario responda el mensaje de cookies
$( document ).ready(function() {
  //document.body.style.overflow = "hidden";
  $('.slider-ilustraciones').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    arrow: true,
    loop: true,
    //autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'ease',
    asNavFor: '.slider-for',
    variableWidth: true
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-ilustraciones'
  });

  const rotatebutton = $('#follow-cursor');
  const section = $('.rotado');

  rotatebutton.on('click', function() {
    section.animate({rotate: '+=90deg'}, 500);
    const currentRotation = section.css('transform');
      if (currentRotation === 'matrix(1, 0, 0, 1, 0, 0)' || currentRotation === 'none') {
        button.hide();
      }
  });
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

$("#follow-cursor").hide();

$(".rotado").mouseenter(function() {
  $("#follow-cursor").fadeIn();
});


// const rotateButton = document.querySelector('.follow-cursor');
//   document.addEventListener('mousemove', e => {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;
//   rotateButton.style.left = mouseX + 'px';
//   rotateButton.style.top = mouseY + 'px';
// });


  