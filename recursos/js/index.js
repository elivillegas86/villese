$(window).scroll(function() {
    //window.alert("scroll");
    if ($("#menu").offset().top > 56) {
        //window.alert("scroll1");
        $("#menu").addClass("navbar2");
    } else {
        //window.alert("scroll2");
        $("#menu").removeClass("navbar2");
    }
    if ($("#logo-horizontal").offset().top > 56) {
        $("#logo-horizontal").addClass("navbar-brand-logo-invisible");
        $("#logo-horizontal").removeClass("navbar-brand-logo-visible");
        $("#logo").addClass("navbar-brand-logo-visible");
        $("#logo").removeClass("navbar-brand-logo-invisible");
    } else {
        $("#logo-horizontal").addClass("navbar-brand-logo-visible");
        $("#logo-horizontal").removeClass("navbar-brand-logo-invisible");
        $("#logo").addClass("navbar-brand-logo-invisible");
        $("#logo").removeClass("navbar-brand-logo-visible");
    }
  });