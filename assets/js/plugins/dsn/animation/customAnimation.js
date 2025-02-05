import {
    dataAttr
} from "../help";
import mediaMatching from "./MediaMatching";


function clearObject(obj) {
    for (const key in obj) {
        delete obj[key];
    }
}

function customAnimation($el = jQuery(document)) {
    // .find('[data-dsn-animation]')
    $el.each(function() {


        const animationOption = dataAttr(this, 'animation');
        if (typeof animationOption === "string") {
            console.warn("the code has invalid", animationOption, this);
            return;
        }


        const {
            from = {},
                from_tablet = {},
                from_mobile = {},
                to = {},
                to_tablet = {},
                to_mobile = {},
                option = {},
                responsive = []
        } = animationOption || {};


        const isFrom = Object.keys(from).length;
        const isTo = Object.keys(to).length;
        const {
            pin,
            scrub = true,
            start = "100%",
            end = "0%",
            trigger,
            markers
        } = option;

        const a_t_from = jQuery.extend(false, from, from_tablet);
        const a_t_to = jQuery.extend(false, to, to_tablet);

        const a_m_from = jQuery.extend(false, a_t_from, from_mobile);
        const a_m_to = jQuery.extend(false, a_t_to, to_mobile);


        if (!responsive.includes("desktop")) {
            clearObject(from);
            clearObject(to);
        }
        if (!responsive.includes("tablet")) {
            clearObject(from_tablet);
            clearObject(to_tablet);
        }
        if (!responsive.includes("mobile")) {
            clearObject(from_mobile);
            clearObject(to_mobile);
        }


        const scrollTrigger = {
            trigger: trigger ? trigger : pin ? jQuery(this).parents('.elementor-section') : this,
            invalidateOnRefresh: true,
            scrub,
            anticipatePin: 1,
            pin,
            markers,
            start: `top ${start}`,
            end: `bottom ${end?.replace('{{height}}', this.offsetHeight)}`
        };


        mediaMatching((context) => {
            const {
                isDesktop,
                isTablet,
                isMobile
            } = context.conditions;

            const matchDesktop = isDesktop && responsive.includes("desktop");
            const matchTablet = isTablet && responsive.includes("tablet");
            const matchMobile = isMobile && responsive.includes("mobile");

            if (!matchDesktop && !matchMobile && !matchTablet)
                return;


            const animation_target = $body.hasClass('elementor-editor-active') ? jQuery(this).parents('[data-element_type="widget"]') : this;
            const fromAnimation = isDesktop ? from : isTablet ? a_t_from : a_m_from;
            const toAnimation = isDesktop ? to : isTablet ? a_t_to : a_m_to;


            const animate = gsap.timeline({
                defaults: {
                    ease: "none"
                }
            });

            let st;


            if (!toAnimation.repeat) {
                if (matchDesktop)
                    st = ScrollTrigger.create({
                        animation: animate,
                        ...scrollTrigger
                    });

                else if (matchTablet)
                    st = ScrollTrigger.create({
                        animation: animate,
                        ...scrollTrigger
                    });

                else if (matchMobile)
                    st = ScrollTrigger.create({
                        animation: animate,
                        ...scrollTrigger
                    });
            }


            if (isFrom && isTo)
                animate.fromTo(animation_target, fromAnimation, toAnimation);
            else if (isFrom)
                animate.from(animation_target, fromAnimation);
            else if (isTo)
                animate.to(animation_target, toAnimation);


            return () => {
                st ? .kill();
                animate.kill();
            }

        });


    });
}

export default customAnimation;