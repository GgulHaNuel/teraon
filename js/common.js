document.addEventListener('DOMContentLoaded', function () {
    // JAVASCRIPT
    document.querySelectorAll('a[href="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });

    window.addEventListener('scroll', function () {
        SCROLLNAV();
        TERABONDSCROLL();
    });

    function SCROLLNAV() {
        if (window.pageYOffset >= 100) {
            document.querySelector('#new_hd').classList.add('scroll');
        } else {
            document.querySelector('#new_hd').classList.remove('scroll');
        }
    }
    SCROLLNAV();

    function TERABONDSCROLL() {
        let sec2_top = document.querySelector('.sec_cont2').offsetTop;
        let window_top = window.pageYOffset;

        if (window_top >= sec2_top) {
            document.querySelector('#new_hd').classList.add('terabond_active');
        } else {
            document.querySelector('#new_hd').classList.remove('terabond_active');
        }
    }
    TERABONDSCROLL();

    // JAVASCRIPT END

    // JQUERY
    function HDNAVHOVER() {
        $('.nav_item > a').mouseover(function () {
            $('.deps_con').stop().slideDown(300);
            $('#new_hd').addClass('hd_active');
        });

        $('#new_hd').mouseleave(function () {
            $('.deps_con').stop().slideUp(300);
            $('#new_hd').removeClass('hd_active');
        });
    }
    HDNAVHOVER();

    function LANGCLICK() {
        let CLICKLANG = 0;
        $('.lang_click > a').click(function () {
            if (CLICKLANG == 0) {
                $('.deps_lang').stop().slideDown(300);
                CLICKLANG = 1;
            } else if (CLICKLANG == 1) {
                $('.deps_lang').stop().slideUp(300);
                CLICKLANG = 0;
            }
        });
    }
    LANGCLICK();

    // JQUERY END
});
