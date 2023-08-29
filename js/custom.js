//Esta primer funcion bloquea el scroll del sitio apenas carga para esperar que el usuario responda el mensaje de cookies
$( document ).ready(function() {

  let darkModeEnabled;

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