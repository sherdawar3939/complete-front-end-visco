$(function() {
    new WOW().init();
})

/*  .......
work section
*/

$(function() {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enable: true
        }
        // other options
    });
});

/*  .......
team section carousel effect
*/
$(function() {
        $('#team-members').owlCarousel({
            items: 3,
            autoplay: true,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1

                },
                // breakpoint from 480 up
                480: {
                    items: 2
                },
                // breakpoint from 768 up
                768: {
                    items: 3

                },
            }

        });
    })
    /*..............................
           ..........testimonial..............*/
$(function() {
        $('#customers-testimonials').owlCarousel({
            items: 1,
            autoplay: true,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true

        });
    })
    /*..............................
               ..........counter ..............*/
$(function() {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    })
    /*  .......
    clients
    */
$(function() {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1

            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5

            },
            // breakpoint from 992 up
            992: {
                items: 6
            }

        }

    });
})

/*  .......
    clients
    */

$(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() < 50) {
                // hide nav
                $("nav").removeClass("vesco-top-nav")
                $(".btn-back-to-top").fadeOut();
                // show nav
            } else {
                $("nav").addClass("vesco-top-nav")
                $(".btn-back-to-top").fadeIn();
            }

        })
    })
    /*  .......
     Scroll Smith
        */
$(function() {
        $('a.scroll-smooth').click(function(event) {

            // get /return id like #home , services, contact, #team, 
            event.preventDefault();
            var section = $(this).attr("href");
            $('html, body').animate({
                scrollTop: $(section).offset().top - 64
            }, 1250, "easeInOutExpo")

        })
    })
    //close menu on clicking the toggle button
$(function() {
    $(".navbar-collapse ul li a").on("click touch", function() {
        $(".navbar-toggle").click()
    })
})