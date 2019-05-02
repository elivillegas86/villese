$(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("navbar2");
    } else {
        $("#menu").removeClass("navbar2");
    }
    if ($("#logo").offset().top > 56) {
        document.getElementById('logo').src = "recursos/img/nomadesoft-logo-completo-horizontal.png";
        $("#logo").addClass("navbar-logo");
    } else {
        document.getElementById('logo').src = "recursos/img/nomadesoft-logo-completo-vertical.png";
        $("#logo").removeClass("navbar-logo");
    }
    // mostramos u ocultamos flecha top segun donde estemos
    if ($(this).scrollTop() > 200) {
        document.getElementById('button_top').style.display = "block";
    } else {
        document.getElementById('button_top').style.display = "none";
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
        $('.navbar-collapse').collapse('hide');
    });
    // $('.navbar-brand').on('click', function() {
    //     // obtenemos el nav-item
    //     var item = (this.firstElementChild||this.firstChild);
    //     // recuperamos el objetivo a donde tenemos q navegar
    //     var target = item.getAttribute('data-target');
    //     // navegamos
    //     $(target).get(0).scrollIntoView({block: "start", behavior: "smooth"});
    //     $('.navbar-collapse').collapse('hide');
    // });
})