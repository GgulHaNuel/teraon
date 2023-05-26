document.addEventListener('DOMContentLoaded', function () {
    // JAVASCRIPT //
    document.querySelectorAll('a[href="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });

    window.addEventListener('scroll', function () {
        SCROLLNAV();
    });

    function SCROLLNAV() {
        if (window.pageYOffset >= 100) {
            document.querySelector('#new_hd').classList.add('scroll');
        } else {
            document.querySelector('#new_hd').classList.remove('scroll');
        }
    }
    SCROLLNAV();

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

    function INFOSLIDER() {
        var swiper = new Swiper('.info_slider_con', {
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 500,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    INFOSLIDER();

    function HISSLIDER() {
        var swiper = new Swiper('.his_swiper', {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            spaceBetween: 0,
            speed: 500,
            navigation: {
                nextEl: '#HISNEXT',
                prevEl: '#HISPREV',
            },
            breakpoints: {
                885: {
                    slidesPerGroup: 1,
                },
            },
        });
    }
    HISSLIDER();

    function CARSLIDER() {
        var swiper = new Swiper('.car_swiper', {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            spaceBetween: 0,
            speed: 500,
            navigation: {
                nextEl: '#CARNEXT',
                prevEl: '#CARPREV',
            },
            breakpoints: {
                885: {
                    slidesPerGroup: 2,
                },
            },
        });
    }
    CARSLIDER();

    // JAVASCRIPT END //

    // JQUERY //
    function HDNAVHOVER() {
        $('.nav_item > a').mouseover(function () {
            $('.deps_con').stop().slideDown(300);
            $('#new_hd').addClass('hd_active');
        });

        if ($(window).width() > 1280) {
            $('#new_hd').mouseleave(function () {
                $('.deps_con').stop().slideUp(300);
                $('#new_hd').removeClass('hd_active');
                $('#new_hd').removeClass('navclick');
                $(barsclick).removeClass('bar_active');
                $('.m_nav_con').slideUp(300);
                $('.hd_bg').fadeOut(300);
                $('body').css({ overflow: 'auto' });
                ifclick = 0;
            });
        }
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

    function SUBCLICK() {
        $('.bn_more > a').click(function () {
            var name = $(this).attr('data-aco');
            $('#' + name).slideDown(500);
        });

        $('.aco_close > a').click(function () {
            var name = $(this).attr('data-close');
            $('#' + name).slideUp(500);
        });
    }
    SUBCLICK();

    let barsclick = $('.nav_bars > button');
    let ifclick = 0;
    function NAVBARS() {
        $(barsclick).click(function () {
            if (ifclick == 0) {
                $('#new_hd').addClass('navclick');
                $('#new_hd').addClass('hd_active');
                $(this).addClass('bar_active');
                $('.hd_bg').fadeIn(300);
                $('.m_nav_con').stop().slideDown(300);
                $('body').css({ overflow: 'hidden' });
                ifclick = 1;
            } else if (ifclick == 1) {
                $('#new_hd').removeClass('navclick');
                $('#new_hd').removeClass('hd_active');
                $(this).removeClass('bar_active');
                $('.hd_bg').fadeOut(300);
                $('.m_nav_con').slideUp(300);
                $('body').css({ overflow: 'auto' });
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

    function SIDEBAR() {
        $('.move_a').click(function (event) {
            event.preventDefault();
            var targetOffset = $($(this).attr('href')).offset().top - 111;
            $('html, body').animate({ scrollTop: targetOffset }, 500);
        });

        $(window).on('scroll', function () {
            var scrollPosition = $(window).scrollTop();

            $('.move_a').each(function () {
                var targetId = $(this).attr('href');
                var target = $(targetId);
                var targetTop = target.offset().top;
                var targetBottom = targetTop + target.outerHeight();

                if (scrollPosition >= targetTop - 200 && scrollPosition < targetBottom - 150) {
                    $('.move_a').removeClass('active');
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        });
    }
    SIDEBAR();

    function TOPBTN() {
        $('.top_btn > button').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 500);
        });
    }
    TOPBTN();

    function CHARTBOX() {
        $(".chart_txt .txt_01").mouseover(function(){
            $(".policy_chart").addClass("policy_chart_01");
            $(".chart_info_01").fadeIn(300);
        });

        $(".chart_txt .txt_01").mouseleave(function(){
            $(".policy_chart").removeClass("policy_chart_01");
            $(".chart_info_01").hide();
        });

        $(".chart_txt .txt_02").mouseover(function(){
            $(".policy_chart").addClass("policy_chart_02");
            $(".chart_info_02").fadeIn(300);
        });

        $(".chart_txt .txt_02").mouseleave(function(){
            $(".policy_chart").removeClass("policy_chart_02");
            $(".chart_info_02").hide();
        });

        $(".chart_txt .txt_03").mouseover(function(){
            $(".policy_chart").addClass("policy_chart_03");
            $(".chart_info_03").fadeIn(300);
        });

        $(".chart_txt .txt_03").mouseleave(function(){
            $(".policy_chart").removeClass("policy_chart_03");
            $(".chart_info_03").hide();
        });

        $(".chart_txt .txt_04").mouseover(function(){
            $(".policy_chart").addClass("policy_chart_04");
            $(".chart_info_04").fadeIn(300);
        });

        $(".chart_txt .txt_04").mouseleave(function(){
            $(".policy_chart").removeClass("policy_chart_04");
            $(".chart_info_04").hide();
        });

        $(".chart_txt .txt_05").mouseover(function(){
            $(".policy_chart").addClass("policy_chart_05");
            $(".chart_info_05").fadeIn(300);
        });

        $(".chart_txt .txt_05").mouseleave(function(){
            $(".policy_chart").removeClass("policy_chart_05");
            $(".chart_info_05").hide();
        });
    }
    CHARTBOX();

    function BOARD_VIEW() {
        $(".press_item > a").click(function() {
            $(".board_popup").css({
                display: "flex",
            });
            $("body").css({
                overflow: "hidden",
            })
        });

        $(".board_close").click(function() {
            $(".board_popup").hide();
            $("body").css({
                overflow: "auto",
            })
        });
    }
    BOARD_VIEW();

    function VIDEO_VIEW() {
        $(".video_item > a").click(function() {
            $(".video_popup").css({
                display: "flex",
            });
            $("body").css({
                overflow: "hidden",
            })
        });

        $(".video_close").click(function() {
            $(".video_popup").hide();
            $("body").css({
                overflow: "auto",
            })
        });
    }
    VIDEO_VIEW();

    function CONTECT_VIEW() {
        $(".contact_submit > button").click(function() {
            $(".contact_popup").css({
                display: "flex",
            });
            $("body").css({
                overflow: "hidden",
            })
        });

        $(".contact_close").click(function() {
            $(".contact_popup").hide();
            $("body").css({
                overflow: "auto",
            })
        });
    }
    CONTECT_VIEW();

    // JQUERY END //
});
