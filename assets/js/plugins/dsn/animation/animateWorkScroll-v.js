import {
    dataAttr
} from "../help";
import {
    killAjax
} from '../useEffect';
import checkMobile from "../help/checkMobile";


function animateWorkScrollV($el = jQuery(document)) {


    $el.each(function() {


        let height = 0;
        let heightElement = 0;


        this.querySelectorAll('.grid-item').forEach(function(item, $index) {
            if (height < item.offsetHeight)
                height = item.offsetHeight;


            gsap.set(item, {
                position: "absolute",
                width: "100%",
                y: heightElement,
                zIndex: $index++,
                top: "calc(var(--dsn-col-item) * " + $index + ")",
                filter: "blur(1px)",
                scale: 1.059,
                pointerEvents: "auto",
                force3D: true
            });
            heightElement += item.offsetHeight + 50;





        });



        gsap.set(this, {
            height: height,
            position: "relative"
        });


        this.classList.remove('use-v-scroll');
        const {
            speed = 4, start = 0, center_screen
        } = dataAttr(this, 'option') || {};


        const animate = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                invalidateOnRefresh: true,
                anticipatePin: 2,
                scrub: true,
                pin: true,
                start: "top " + (checkMobile() ? 0 : start + (center_screen ? (($wind.height() - height) / 2) : 0)),
                end: () => "+=" + (height + (speed * 1000)),
            }
        });


        jQuery(this).find('.grid-item').each(function($index) {
            animate.to(this, 2, {
                yPercent: 0,
                y: 0,
                top: 0
            }, $index === 0 ? 0 : '-=1')
            animate.to(this, {
                scale: 0.95,
                filter: "blur(0px)"
            }, $index === 0 ? 0 : "-=0.9")
        });


        killAjax(function() {
            animate.scrollTrigger.kill();
            animate.kill();

        });

    });
}

export default animateWorkScrollV;