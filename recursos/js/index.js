$(window).scroll(function() {
    //window.alert("scroll");
    if ($("#menu").offset().top > 56) {
        //window.alert("scroll1");
        $("#menu").addClass("navbar2");
    } else {
        //window.alert("scroll2");
        $("#menu").removeClass("navbar2");
    }
    if ($("#logo").offset().top > 56) {
        document.getElementById('logo').src = "recursos/index/nomadesoft-logo.png";
        $("#logo").addClass("navbar-logo");
    } else {
        document.getElementById('logo').src = "recursos/index/nomadesoft-logo-completo.png";
        $("#logo").removeClass("navbar-logo");
    }
    // mostramos u ocultamos flecha top segun donde estemos
    if ($(this).scrollTop() > 200) {
        document.getElementById('button_top').style.display = "block";
    } else {
        document.getElementById('button_top').style.display = "none";
    }
    // aplicamos efecto desenfocado a las secciones
    // Seccion Productos
    var inicio = $("#productos").offset().top - 100
    var fin = inicio + ($("#productos")[0].clientHeight / 2)
    if (($(this).scrollTop() < inicio) 
        || ($(this).scrollTop() > fin)) {
        $("#productosdiv").addClass("ns-desenfoque");
        $("#productosdiv").removeClass("ns-enfoque");
    } else {
        $("#productosdiv").removeClass("ns-desenfoque");
        $("#productosdiv").addClass("ns-enfoque");
    }
    // Seccion Servicios
    var inicio = $("#servicios").offset().top - 100
    var fin = inicio + ($("#servicios")[0].clientHeight / 2)
    if (($(this).scrollTop() < inicio) 
        || ($(this).scrollTop() > fin)) {
        $("#serviciosdiv").addClass("ns-desenfoque");
        $("#serviciosdiv").removeClass("ns-enfoque");
    } else {
        $("#serviciosdiv").removeClass("ns-desenfoque");
        $("#serviciosdiv").addClass("ns-enfoque");
    }
    // Seccion Nosotros
    var inicio = $("#nosotros").offset().top - 100
    var fin = inicio + ($("#nosotros")[0].clientHeight / 2)
    if (($(this).scrollTop() < inicio) 
        || ($(this).scrollTop() > fin)) {
        $("#nosotrosdiv").addClass("ns-desenfoque");
        $("#nosotrosdiv").removeClass("ns-enfoque");
    } else {
        $("#nosotrosdiv").removeClass("ns-desenfoque");
        $("#nosotrosdiv").addClass("ns-enfoque");
    }
    // Seccion Casos de Exito
    var inicio = $("#clientes").offset().top - 100
    var fin = inicio + ($("#clientes")[0].clientHeight / 2)
    if (($(this).scrollTop() < inicio) 
        || ($(this).scrollTop() > fin)) {
        $("#clientesdiv").addClass("ns-desenfoque");
        $("#clientesdiv").removeClass("ns-enfoque");
    } else {
        $("#clientesdiv").removeClass("ns-desenfoque");
        $("#clientesdiv").addClass("ns-enfoque");
    }
});

$('.carousel').carousel({
    interval: 1500
})

$(document).ready(function() {
    // Cargamos la libreria de animaciones
    var options = {
        animateThreshold: 100,
        scrollPollInterval: 5
    };
    $('.aniview').AniView(options);

    // Cargo funciones para el scroll
    $('.nav-item').on('click', function() {
        // obtenemos el nav-item
        var item = (this.firstElementChild||this.firstChild);
        // recuperamos el objetivo a donde tenemos q navegar
        var target = item.getAttribute('data-target');
        // navegamos
        $(target).get(0).scrollIntoView({block: "start", behavior: "smooth"});
    });

})