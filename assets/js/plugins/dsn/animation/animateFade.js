import {
    killAjax
} from '../useEffect';


const animationFade = function(items) {
    if (!items.length)
        return;

    items.removeClass('dsn-up');

    const animate = gsap.from(items, {
        willChange: "transform , opacity",
        // duration: 0.8,
        y: 40,
        autoAlpha: 0,
        ease: Back.easeOut.config(1.7),
        clearProps: "transform",
        stagger: 0.2,
        scrollTrigger: {
            trigger: this,
            start: `top 60%`,
        }
    }).eventCallback('onComplete', function() {
        animate.scrollTrigger ? .kill();
        animate ? .kill();
    });

    killAjax(function() {
        animate.scrollTrigger ? .kill();
        animate ? .kill();
    });
}

function animateFade($el = jQuery(document)) {

    $el.find(".dsn-layout-fade-up").each(function() {
        const items = jQuery(this).find('.dsn-up');
        this.classList.remove('dsn-layout-fade-up');
        animationFade.bind(this)(items);
    });
    $el.find(".dsn-up").each(function() {
        animationFade.bind(this)(jQuery(this));
    });
}

export default animateFade;