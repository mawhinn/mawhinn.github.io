/* Javascript */
    $(window).scroll(function() {
        var scrollviz = $(window).scrollTop();
        if (scrollviz > window.innerHeight - 600) {
            $(".back1").removeClass("back2");
        } else {
            $(".back1").addClass("back2");
        }
    });
    
    
    $(window).scroll(function() {
        var scrollviz = $(window).scrollTop();
        if (scrollviz > window.innerHeight - 600) {
            $(".font-color1").removeClass("font-color2");
        } else {
            $(".font-color1").addClass("font-color2");
        }
    });

    function toggleMenu() {
        $("#hamburgerMenu").toggleClass("collapsed");
        $(".aa-mobile-overlay").animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);
    }