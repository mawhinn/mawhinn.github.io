/* Javascript */
    $(document).ready(function(){

       $('.materialboxed').materialbox();
       $('.parallax').parallax();
       $('.tabs').tabs();
       $('.datepicker').datepicker({
         disableWeekends: true,
         yearRange: 1
       });
     });

    $(window).scroll(function() {
        var scrollviz = $(window).scrollTop();
        if (scrollviz > window.innerHeight - 300) {
            $(".back1").removeClass("back2");
        } else {
            $(".back1").addClass("back2");
        }

        var scrollviz = $(window).scrollTop();
        if (scrollviz > window.innerHeight - 300) {
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
