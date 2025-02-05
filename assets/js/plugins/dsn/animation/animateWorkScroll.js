import {
    dataAttr
} from "../help";
import {
    killAjax
} from '../useEffect';
import checkMobile from "../help/checkMobile";


function animateWorkScroll($el = jQuery(document)) {

    if (checkMobile())
        return;
    $el.each(function() {


        this.classList.remove('use-horizontal-scroll');
        this.closest(".root-posts") ? .classList.add("over-hidden");
        this.style.flexWrap = 'nowrap';
        const {
            speed = 0, start = 0
        } = dataAttr(this, 'option') || {};
        const str = ($wind.height() - this.offsetHeight) / 2;

        const animate = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                pin: true,
                scrub: 1,
                end: () => "+=" + (this.offsetWidth + (speed * 100)),
                start: "top " + (start + str)
            },
            // defaults: {ease: "none"}
        });

        const startUp = this.querySelector('.start-section .dsn-animate-up');
        const startDown = this.querySelector('.start-section .dsn-animate-down');
        const endUp = this.querySelector('.end-section .dsn-animate-up');
        const endDown = this.querySelector('.end-section .dsn-animate-down');
        const postTitle = this.querySelectorAll('.box-content > .post-title');


        const animateEnd = gsap.timeline({
            scrollTrigger: {
                trigger: endDown,
                containerAnimation: animate,
                start: "0% 70%",
                end: "0% 30%",
                scrub: true
            }
        });

        animate.to(this, {
            x: -(this.scrollWidth - $wind.width()),
            ease: "none",
        })




        animate.to(postTitle, {
            paddingLeft: 15
        }, 0);

        if (startUp)
            animate.to(startUp, {
                y: -150,
                opacity: 0
            }, 0);
        if (startDown)
            animate.to(startDown, {
                y: 150,
                opacity: 0
            }, 0);



        if (endDown)
            animateEnd.from(endDown, {
                y: 150,
                opacity: 0,
                ease: "none",
            }, 0);

        if (endDown)
            animateEnd.from(endUp, {
                y: -150,
                opacity: 0,
                ease: "none",
            }, 0);


        killAjax(function() {
            animate.scrollTrigger.kill();
            animate.kill();
            animateEnd.scrollTrigger.kill();
            animateEnd.kill();

        });

    });
}

export default animateWorkScroll;