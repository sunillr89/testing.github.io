import {
    dataAttr
} from "../help";
import {
    killAjax
} from '../useEffect';


function animateImageScroll($el = jQuery(document)) {

    $el.each(function() {


        this.classList.remove('use-horizontal-scroll-image');
        this.style.flexWrap = 'nowrap';
        const {
            pin,
            speed = 1,
            start = "100%",
            end = "0%",
            center
        } = dataAttr(this, 'option') || {};


        this.style.position = "relative";
        const position = this.scrollHeight;
        this.style.position = "";

        const rowItem = parseInt(getComputedStyle(this).getPropertyValue("--dsn-row-item")) || 0;
        const height = position - this.clientHeight - ((this.querySelectorAll(".grid-item").length * rowItem) / 2) + rowItem;


        const animate = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                invalidateOnRefresh: true,
                pin,
                scrub: speed,
                start: `top ${start}`,
                end: `bottom ${end}`,
            }
        });


        if (this.classList.contains("move-left"))
            animate.to(this, {
                x: -(this.scrollWidth - $wind.width()),
                ease: "none",
            })
        else if (this.classList.contains("move-top"))
            animate.to(this, {
                y: -(height),
                ease: "none",
            })
        else if (this.classList.contains("move-bottom"))
            animate.fromTo(this, {
                y: -(height),
            }, {
                ease: "none",
                y: 0
            })
        else
            animate.fromTo(this, {
                x: -(this.scrollWidth - $wind.width()),
                xPercent: center ? -50 : 0
            }, {
                ease: "none",
                x: 0,
                xPercent: 0
            })


        killAjax(function() {
            animate.scrollTrigger.kill();
            animate.kill();
        });

    });
}

export default animateImageScroll;