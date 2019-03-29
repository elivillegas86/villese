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
        document.getElementById('logo').src = "recursos/index/nomadesoft-logo-horizontal.png";
        $("#logo").removeClass("navbar-logo");
    }
  });

  $('.carousel').carousel({
    interval: 1500
  })