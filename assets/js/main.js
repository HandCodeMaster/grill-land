//SCROLL DEL NAV CAMBIA DE COLOR
$(window).on("scroll", function () {
    if ($(window).scrollTop() > $("#about").offset().top - 150) {
        $("nav").addClass("navegador__activo");
    } else {
        $("nav").removeClass("navegador__activo");
    };
});


