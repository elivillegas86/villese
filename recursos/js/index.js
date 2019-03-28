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
        $("#logo").addClass("navbar-brand-logo-chico");
        $("#logo").removeClass("navbar-brand-logo-grande");
    } else {
        $("#logo").addClass("navbar-brand-logo-grande");
        $("#logo").removeClass("navbar-brand-logo-chico");
    }
  });