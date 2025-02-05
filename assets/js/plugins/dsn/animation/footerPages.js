import {
    killAjax
} from "../useEffect";
import {
    dataAttr
} from "../help";


function footerPages() {
    jQuery('.footer-animate:not(.next-project)').each(function() {

        const svg = this.querySelector(".dsn-separator .path-anim");


        const parallax = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                end: `top 100%-=${this.offsetHeight}`,
                scrub: true,
                // markers: true
            }
        });

        if (svg) {
            parallax.to(svg, {
                attr: {
                    d: dataAttr(svg, 'to')
                },
                overwrite: "none"
            }, 0)
        }

        parallax.fromTo(this.querySelector('.footer-content'), {
            yPercent: -70
        }, {
            yPercent: 0,
            overwrite: "none"
        }, 0);


        killAjax(function() {
            parallax.scrollTrigger ? .kill();
            parallax.kill();
        });

    });
}

export default footerPages;