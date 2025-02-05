import {
    dataAttr
} from "../help";
import {
    killAjax
} from '../useEffect';
import mediaMatching from "./MediaMatching";


function animateImageScroll($el = jQuery(document)) {

    // .find('.use-horizontal-scroll-image')
    $el.each(function() {


        this.classList.remove('dsn-animate-video');
        const {
            speed = 0
        } = dataAttr(this, 'option') || {};

        const bg = $(this).find('.img-box-parallax');
        const container = $(this).find('> .container');
        const isBlur = bg.get(0) ? .getAttribute("data-dsn-grid");


        let animate;
        let scroll;

        mediaMatching((context) => {
            const {
                isDesktop,
                isTablet,
                isMobile
            } = context.conditions;

            animate = gsap.timeline();


            if (bg.length && isBlur)
                animate.from(bg, {
                    filter: "blur(5px)"
                }, 0);
            else {
                animate.fromTo(bg, {
                    clipPath: "circle(5% at 50% 50%)"
                }, {
                    clipPath: "circle(75% at 50% 50%)"
                }, 0);

                animate.from($(this).find(".dsn-btn"), {
                    opacity: 0.6
                }, 0);

            }


            if (container.length) {
                animate.to(container.find(".animate-left"), {
                    xPercent: 50
                }, 0);
                animate.to(container.find(".animate-right"), {
                    xPercent: -50
                }, 0);
            }


            scroll = ScrollTrigger.create({
                trigger: this,
                animation: animate,
                pin: !isBlur,

                scrub: true,
                end: `+=${this.offsetHeight + (speed * 100)}`
            });


            return () => {
                animate ? .kill();
            };
        });


        killAjax(function() {
            scroll ? .kill();
            animate ? .kill();
        });

    });
}

export default animateImageScroll;