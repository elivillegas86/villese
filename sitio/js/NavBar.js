$(document).ready(function(){
  //Obtenemos las etiquetas <a> que tengan la Clase scroll
  $("a.scroll").on('click', function(event) {
    //Recuperamos el atributo data-target de la etiqueta <a>
    var objetivo = $($(this).attr("data-target"));
    //Si no esta vacio continuamos
    if (objetivo.length) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $(objetivo).offset().top
      }, 800, function(){

      });
    }
  });
});