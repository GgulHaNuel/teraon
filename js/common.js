document.addEventListener('DOMContentLoaded', function () {
    // JAVASCRIPT //
    document.querySelectorAll('a[href="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });

    window.addEventListener('scroll', function () {
        SCROLLNAV();
        // TERABONDSCROLL();
    });

    function SCROLLNAV() {
        if (window.pageYOffset >= 100) {
            document.querySelector('#new_hd').classList.add('scroll');
        } else {
            document.querySelector('#new_hd').classList.remove('scroll');
        }
    }
    SCROLLNAV();

    // function TERABONDSCROLL() {
    //     let sec2_top = document.querySelector('.sec_cont2').offsetTop;
    //     let sec3_top = document.querySelector('.sec_cont3').offsetTop;
    //     let window_top = window.pageYOffset;

    //     if (window_top >= sec2_top) {
    //         document.querySelector('#new_hd').classList.add('terabond_active');
    //     } else {
    //         document.querySelector('#new_hd').classList.remove('terabond_active');
    //     }

    //     if (window_top >= sec3_top) {
    //         document.querySelector('#new_hd').classList.remove('terabond_active');
    //         document.querySelector('#new_hd').classList.add('terabond_active2');
    //     } else {
    //         document.querySelector('#new_hd').classList.remove('terabond_active2');
    //     }
    // }
    // TERABONDSCROLL();

    function NEWSSLIDER() {
        var swiper = new Swiper('.news_list', {
            slidesPerView: 'auto',
            spaceBetween: 24,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    NEWSSLIDER();

    // JAVASCRIPT END //

    // JQUERY //
    function HDNAVHOVER() {
        $('.nav_item > a').mouseover(function () {
            $('.deps_con').stop().slideDown(300);
            $('#new_hd').addClass('hd_active');
        });

        $('#new_hd').mouseleave(function () {
            $('.deps_con').stop().slideUp(300);
            $('#new_hd').removeClass('hd_active');
            $('#new_hd').removeClass('navclick');
            $(barsclick).removeClass('bar_active');
            $(".m_nav_con").hide();
            $(".hd_bg").fadeOut(300);
            $("body").css({overflow : "auto",});
            ifclick = 0;
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

    function SITECLICK() {
        let CLICKFAMILY = 0;
        $('.family_link > a').click(function () {
            if (CLICKFAMILY == 0) {
                $('.deps_site').stop().slideDown(300);
                CLICKFAMILY = 1;
            } else if (CLICKFAMILY == 1) {
                $('.deps_site').stop().slideUp(300);
                CLICKFAMILY = 0;
            }
        });
    }
    SITECLICK();

    function POPCLICK() {
        $('.viewstat_btn > a').click(function () {
            var name = $(this).attr('data-pop');
            $('#' + name).slideDown(500);
        });

        $('.stat_close > a').click(function () {
            var name = $(this).attr('data-close');
            $('#' + name).slideUp(500);
        });
    }
    POPCLICK();

    function POPIMGCLICK() {
        $('.pop_hover > a').mouseover(function () {
            var name = $(this).attr('data-img');
            $('.pop_hoverimg').removeClass('active');
            $('#' + name).addClass('active');
        });

        $('.pop_hover > a').mouseleave(function () {
            $('.pop_hoverimg').removeClass('active');
            $('.pop_active').addClass('active');
        });
    }
    POPIMGCLICK();

    let barsclick = $('.nav_bars > button');
    let ifclick = 0;
    function NAVBARS() {
        $(barsclick).click(function () {
            if (ifclick == 0) {
                $('#new_hd').addClass('navclick');
                $('#new_hd').addClass('hd_active');
                $(this).addClass('bar_active');
                $(".hd_bg").fadeIn(300);
                $(".m_nav_con").stop().slideDown(300);
                $("body").css({overflow : "hidden",});
                ifclick = 1;
            }else if (ifclick == 1) {
                $('#new_hd').removeClass('navclick');
                $('#new_hd').removeClass('hd_active');
                $(this).removeClass('bar_active');
                $(".hd_bg").fadeOut(300);
                $(".m_nav_con").hide();
                $("body").css({overflow : "auto",});
                ifclick = 0;
            }
        });
    }
    NAVBARS();

    function M_NAV() {
        $('.m_nav_item > a').click(function () {
            $('.m_depscon').slideUp();
            $('.m_nav_item > a').removeClass('m_nav_active');
            if (!$(this).next().is(':visible')) {
                $(this).next().slideDown();
                $(this).addClass('m_nav_active');
            }
        });
    }
    M_NAV();

    // JQUERY END //
});
