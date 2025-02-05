import {
    killAjax
} from './useEffect';

function mouseMove($element, $option) {

    const {
        speed = 0.35, inner = {}, ease = "power2.out", mouseStop
    } = $option, {
        el: elInner,
        speed: speedInner = 0.25
    } = inner;

    gsap.set([$element, elInner], {
        xPercent: -50,
        yPercent: -50
    });

    window.addEventListener("mousemove", e => {

        if ($body.hasClass(mouseStop)) {

            window.$dsnEffect.cursor = {
                x: e.x,
                y: e.y
            };
            return;
        }


        gsap.to($element, {
            x: e.x,
            y: e.y,
            duration: speed,
            ease
        });
        gsap.to(elInner, {
            x: e.x,
            y: e.y,
            duration: speedInner,
            ease
        });
    });


}

export function mouseHover($target, $obj) {

    if ($obj.enter)
        jQuery($target).on('mouseenter', $obj.enter);
    if ($obj.leave)
        jQuery($target).on('mouseleave', $obj.leave);


    killAjax(() => {
        if ($obj.enter)
            jQuery($target).off('mouseenter', $obj.enter);
        if ($obj.leave)
            jQuery($target).off('mouseleave', $obj.leave);
    });
}


export default mouseMove;