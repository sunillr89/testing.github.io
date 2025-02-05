import {
    killAjax
} from "../useEffect";

function skewScroll($el = jQuery(document)) {
    $el.each(function() {

        this.classList.remove("dsn-skew-scroll");
        const brandItem = this.querySelectorAll(".brand-item");

        let proxy = {
                skew: 0
            },
            skewSetter = gsap.quickSetter(brandItem, "skewY", 'deg'), // fast
            clamp = gsap.utils.clamp(-10, 10); // don't let the skew go beyond 20 degrees.

        const scroller = ScrollTrigger.create({

            trigger: this,
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -200);
                // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                if (Math.abs(skew) > Math.abs(proxy.skew)) {


                    proxy.skew = skew;
                    gsap.to(proxy, {
                        skew: 0,
                        // duration: 0.8,
                        // ease: "power3",
                        overwrite: true,
                        onUpdate: () => skewSetter(proxy.skew)
                    });
                }
            }
        });


        // make the right edge "stick" to the scroll bar. force3D: true improves performance
        gsap.set(brandItem, {
            transformOrigin: "center center",
            force3D: true
        });


        killAjax(function() {
            scroller.kill();
        });

    });


}

export default skewScroll;