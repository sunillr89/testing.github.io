import headerPages from './headerPages';
import parallaxHover from './parallaxHover';
import parallaxImg from './parallaxImg';
import nextPage from "./nextPage";
import animateNumber from "./animateNumber";
import animateSkills from "./animateSkills";
import animateWorkScroll from "./animateWorkScroll";
import customAnimation from "./customAnimation";
import footerPages from "./footerPages";
import animateFade from "./animateFade";
import animateText from "./animateText";
import animateImageScroll from "./animateImageScroll";
import workMetroContent from "./workMetroContent";
import animateVideo from "./animateVideo";
import customPind from "./customPind";
import flipAnimation from "./filp-animation";
import skewScroll from "./skewScroll";
import animateFillText from "./animateFillText";
import animateWorkScrollV from "./animateWorkScroll-v";


async function clearControl() {
    await ScrollTrigger.getAll().forEach(function($item) {
        $item.kill();
    });
    await ScrollTrigger.update();
}


export default function effectAnimate() {

    return {
        allInt: function() {
            const s = clearControl();


            jQuery('.use-horizontal-scroll , [data-dsn-animation] , .use-horizontal-scroll-image , .dsn-animate-video , .pinned-scroll,.dsn-skew-scroll,.use-v-scroll').each(($index, $item) => {
                // const element = jQuery($item).parent();
                const element = jQuery($item);
                s.then(() => {

                    if (element.data("dsn-animation"))
                        customAnimation(element);
                    if (element.hasClass('use-horizontal-scroll'))
                        animateWorkScroll(element);
                    if (element.hasClass('use-horizontal-scroll-image'))
                        animateImageScroll(element);
                    if (element.hasClass('dsn-animate-video'))
                        animateVideo(element);
                    if (element.hasClass('pinned-scroll'))
                        customPind(element);
                    if (element.hasClass('dsn-skew-scroll'))
                        skewScroll(element);
                    if (element.hasClass('use-v-scroll'))
                        animateWorkScrollV(element);

                })
            })

            s.then(headerPages)
                .then(parallaxHover)
                .then(parallaxImg)
                .then(flipAnimation)
                .then(nextPage)
                .then(animateNumber)
                .then(animateSkills)
                .then(footerPages)
                .then(animateFade)
                .then(animateText)
                .then(animateFillText)
                .then(workMetroContent)
                .then(() => {
                    if (document.querySelector('.gsap-marker-scroller-start')) {
                        const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
                        $effectScroll.getListener(({
                            offset,
                            x,
                            y
                        }) => gsap.set(markers, {
                            marginTop: -y
                        }), false);
                    }
                })


        },
        parallaxHover,
        parallaxImg,
        animateSkills,
        animateWorkScroll,
        animateImageScroll,
        customAnimation,
        workMetroContent,
        animateFade,
        flipAnimation,
        animateFillText,
        nextPage
    }

}