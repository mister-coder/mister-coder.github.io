document.querySelector('.btn').onclick = function (e) {
    var menu = document.querySelector('.menu');
    var btn = document.querySelector('.btn');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();
    /*
    var t1 = new TimelineMax({ paused: true });

     t1.to(".menu", 1, {
            left: 0,
            ease: Expo.easeInOut,
        });

        t1.staggerFrom(
            ".menu__list > div",
            0.8,
            { y: 100, opacity: 0, ease: Expo.easeOut },
            "0.1",
            "-=0.4"
        );

        t1.reverse();
        $(document).on("click", ".btn", function () {
            t1.reversed(!t1.reversed());
        });

        $(document).on("click", ".menu-close", function () {
            t1.reversed(!t1.reversed());
        });
*/
}