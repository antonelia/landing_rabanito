//Esta primer funcion bloquea el scroll del sitio apenas carga para esperar que el usuario responda el mensaje de cookies
$( document ).ready(function() {
  //document.body.style.overflow = "hidden";
  const rotatebutton = $('#follow-cursor');
  const section = $('.rotado');
  let clicksRotar = 0;
  let darkModeEnabled;

  rotatebutton.on('click', function() {
    clicksRotar ++;
    console.log(clicksRotar);
    if(clicksRotar < 3){
      section.animate({rotate: '+=90deg'}, 500);
    }
    if(clicksRotar >= 2){
      setTimeout(function() {
        rotatebutton.fadeOut();
      }, 500);
    }
    
    const currentRotation = section.css('transform');
      if (currentRotation === 'matrix(1, 0, 0, 1, 0, 0)' || currentRotation === 'none') {
        button.hide();
      }
  });

  $('#darkModeToggle').change(function() {
    darkModeEnabled = $(this).is(':checked'); // Actualizar la variable cada vez que cambie el estado del checkbox
    console.log('Dark mode: ' + darkModeEnabled); // Puedes mostrar el valor en la consola o hacer algo más con él
    if( darkModeEnabled){
      $("body").addClass("dark-mode");
    }else{
      $("body").removeClass("dark-mode");
      console.log("quitar clase")
    }
  });
});

$("#follow-cursor").hide();

$(".rotado").mouseenter(function() {
  $("#follow-cursor").fadeIn();
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


// Funcion imagen antes y despues
// I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
let active = false;

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
document.querySelector('.scroller').addEventListener('mousedown',function(){
  active = true;
  // Add our scrolling class so the scroller has full opacity while active
  document.querySelector('.scroller').classList.add('scrolling');
});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});

// Let's figure out where their mouse is at
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  // Their mouse is here...
  let x = e.pageX;
  // but we want it relative to our wrapper
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  // Okay let's change our state
  scrollIt(x);
});

// Let's use this function
function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
    document.querySelector('.after').style.width = transform+"px";
    document.querySelector('.scroller').style.left = transform-25+"px";
}

// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
scrollIt(150);

// And finally let's repeat the process for touch events
// first our middle scroller...
document.querySelector('.scroller').addEventListener('touchstart',function(){
  active = true;
  document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
  