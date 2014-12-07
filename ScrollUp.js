/**
 * scrollup jQuery
 * This script defines the functionality of the scrollup button which is located at the bottom of the page.
 * It is required to use the scrollup.css file and the according img - furthermore please place the following tag on your page: <a href="#" class="scrollup">Scroll</a>
 * @author Stefan Jud
 */
    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    })