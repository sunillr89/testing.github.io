import {
    killAjax
} from '../useEffect';
import {
    dsnSplitting
} from '../help';


function animateText($el = jQuery(document)) {


    $el.find(".dsn-text").each(function() {

        const text = dsnSplitting.Words(this);
        if (!text)
            return;


        const animate = gsap.from(text.words, {
            willChange: "transform , opacity",
            transformOrigin: "top left",
            duration: 0.8,
            y: 30,
            rotation: 15,
            scale: 0.8,
            opacity: 0,
            ease: Back.easeOut.config(2),
            stagger: 0.08,
            scrollTrigger: {
                trigger: this,
                start: `top 75%`,
            }
        }).eventCallback('onComplete', function() {
            animate.scrollTrigger ? .kill();
            animate ? .kill();
        });

        killAjax(function() {
            animate.scrollTrigger ? .kill();
            animate ? .kill();
        });
    });
}

export default animateText;