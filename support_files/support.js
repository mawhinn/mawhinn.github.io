/* Javascript */
    $(document).ready(function(){

       $('.materialboxed').materialbox();
       $('.parallax').parallax();
       $('.tabs').tabs();
       $('.datepicker').datepicker({
         disableWeekends: true,
         yearRange: 1
       });
       $('.scrollspy').scrollSpy();
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

    function sorryFunction() {
      alert("Sorry, this isn't avalible just yet. You can contact me through any of my social media pages though! Thanks for coming!");
    };
