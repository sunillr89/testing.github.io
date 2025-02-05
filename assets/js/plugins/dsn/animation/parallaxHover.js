import checkMobile from '../help/checkMobile';
import {
    killAjax
} from "../useEffect";

export function parallaxIt(e, target, options) {
    const {
        width,
        height,
        left,
        top
    } = target.getBoundingClientRect(),
        relX = e.pageX - left,
        relY = e.pageY - top,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop, {
            speed,
            move: movement
        } = options;


    gsap.to(target, speed, {
        x: (relX - width / 2) / width * movement,
        y: (relY - height / 2 - scrollTop) / width * movement,
        ease: Power0.easeOut,
    });
}

function parallaxHover($el = jQuery(document), $option = {}) {
    if (checkMobile(true))
        return;

    const options = Object.assign({}, {
        speed: 0.5,
        move: 20
    }, $option);


    $el.find("[data-dsn=\"parallax\"] ").each(function(index, item) {

        /**
         * Append Icon
         */
        const icon = document.createElement("div");
        icon.classList.add('icon-circle');
        icon.style.minWidth = "1px";
        item.appendChild(icon);

        // item.style.transformOrigin = "0 0";
        item.removeAttribute('data-dsn');
        item.classList.add('dsn-parallax-hover');
        const scale = item.classList.contains("image-zoom");
        const moveIcon = item.classList.contains("move-circle");


        const mouseEnter = function(e) {
            if (scale)
                gsap.to([item, icon], .3, {
                    scale: 1.03
                });
        }

        const mouseLeave = function(e) {
            gsap.to([item, icon], 1, {
                x: 0,
                y: 0,
                scale: 1,
                ease: Back.easeOut.config(4)
            });
        }

        const mouseMove = function(e) {
            parallaxIt(e, item, options);
            if (moveIcon)
                parallaxIt(e, icon, { ...options,
                    move: options.move * 2
                });
        }

        /**
         * Event
         */
        item.addEventListener('mouseenter', mouseEnter);
        item.addEventListener('mouseleave', mouseLeave);
        item.addEventListener('mousemove', mouseMove);

        killAjax(function() {
            item.removeEventListener('mouseenter', mouseEnter);
            item.removeEventListener('mouseleave', mouseLeave);
            item.removeEventListener('mousemove', mouseMove);
        });

    });

}

export default parallaxHover;