import {
    killAjax
} from '../useEffect';
import {
    dataAttr,
    dsnSplitting
} from "../help";


function animateFillText($el = jQuery(document)) {


    $el.find(".dsn-fill:not(.dsn-fill-animation)").each(function() {
        const end = dataAttr(this, 'end') || "40%";
        this.classList.add('dsn-fill-animation');
        const text = dsnSplitting.Words(this);
        if (!text) return;
        const n = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                start: "top 75%",
                end: "bottom " + end,
                scrub: !0,
            },
        });

        text.words.forEach((t) => {
            n.to(t, {
                willChange: "background-size",
                transformOrigin: "top left",
                backgroundSize: "100% 100%",
                ease: "none",
            });
        });

        killAjax(function() {
            n.scrollTrigger ? .kill();
            n ? .kill();
        });

    });
}

export default animateFillText;