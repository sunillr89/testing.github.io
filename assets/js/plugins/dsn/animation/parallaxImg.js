import dataAttr from '../help/dataAttr';
import {
    killAjax
} from '../useEffect';

function parallaxImg($el = jQuery(document)) {


    $el.find("[data-dsn-grid=\"move-up\"] , .box-image-parallax .box-image-bg").each(function($index, $target) {


        const img = $target.querySelector('img:not(.hidden) , video'),
            startAnimate = dataAttr($target, 'triggerhook') || 'bottom';

        $target.setAttribute('data-dsn-grid', 'moveUp');


        if (!img)
            return;

        const animation = {
            active: null,
            img: null
        };


        const speed = dataAttr(img, 'speed') || "30%",
            oppositeDirection = img.classList.contains("has-opposite-direction"),
            obj = {
                scale: 1,
                y: oppositeDirection ? '-=' + speed : '+=' + speed,
                force3D: true,
                ease: "none",
            };


        let height = null;
        let y;


        if (startAnimate === 'bottom') {
            height = '+=' + speed;
            y = '-=' + speed;
        } else if (startAnimate === 'center') {
            height = '+=' + speed.replace(/\D/g, "") / 2 + '%';
            y = '-=' + speed.replace(/\D/g, "") / 2 + '%';
        } else {
            y = 0;
        }


        gsap.set(img, {
            height,
            y: oppositeDirection ? 0 : y
        }, 0);


        if ($target.classList.contains('dsn-animate'))
            animation.active = ScrollTrigger.create({
                trigger: $target,
                start: 'top bottom',
                onEnter: self => $target.classList.add("dsn-active")
            });

        if (img.classList.contains("has-scale")) {
            obj['scale'] = 1.1;
        }

        animation.img = gsap.to(img, {
            ...obj,
            // ease : "none",
            scrollTrigger: {
                trigger: $target,
                start: 'top ' + startAnimate,
                scrub: true,
            }
        });


        killAjax(function() {
            animation.img ? .scrollTrigger.kill();
            animation.img ? .kill();
            animation.active ? .kill();
        });
    });

}

export default parallaxImg;