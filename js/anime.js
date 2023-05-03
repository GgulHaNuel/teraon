$(function () {
    gsap.registerPlugin(ScrollTrigger);

    const select = (el) => document.querySelector(el);
    const selectAll = (el) => document.querySelectorAll(el);

    const AniYTop = selectAll('.aniYTop');
    const AniYTopD = selectAll('.aniYTopD');
    const AniXLt = selectAll('.aniXLt');
    const AniXLtD = selectAll('.aniXLtD');

    AniYTop.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 100,
            ease: 'power3.out',
            duration: 2,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });

    AniYTopD.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 100,
            ease: 'power3.out',
            duration: 2,
            stagger: 0.2,
            delay: index * 0.3,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });
});
